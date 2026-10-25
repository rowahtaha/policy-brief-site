#!/usr/bin/perl
# Imports Rowa's articles from LinkedIn and Medium into writing/*.html + writing.html.
# Usage (from the site root):  perl scripts/import-writing.pl
# Re-run any time to pick up new articles; pages are regenerated from the originals.
use strict; use warnings; use utf8;
use open qw(:std :encoding(UTF-8));

my $UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36';
my $LINKEDIN_PROFILE = 'https://www.linkedin.com/in/rowa-taha/';
my $MEDIUM_PROFILE   = 'https://medium.com/@rowataha9';

# LinkedIn articles (public URLs, newest first)
my @LINKEDIN = qw(
  https://www.linkedin.com/pulse/mamdani-ai-schools-rowa-taha-ll-m--6wjbe/
  https://www.linkedin.com/pulse/mercor-how-10-billion-startup-erasing-professionals-rowa-taha-ll-m--wezje/
  https://www.linkedin.com/pulse/eu-ai-act-global-governance-mosaic-rowa-taha-ll-m--scrbe/
  https://www.linkedin.com/pulse/au-continental-ai-strategy-rowa-taha-gjo1e/
  https://www.linkedin.com/pulse/council-europe-ai-convention-anchoring-centuries-human-rowa-taha-ptn9e/
  https://www.linkedin.com/pulse/un-general-assembly-resolution-ares78l49-2024-rowa-taha-a8ope/
  https://www.linkedin.com/pulse/isoiec-420012023-apex-ai-governance-technical-standards-rowa-taha-nssee/
  https://www.linkedin.com/pulse/hiroshima-ai-process-operationalizing-global-safety-world-rowa-taha-8cise/
  https://www.linkedin.com/pulse/bletchleys-code-pivot-from-principles-pragmatic-safety-rowa-taha-8j3fe/
  https://www.linkedin.com/pulse/global-partnership-ai-gpai-from-oecd-principles-practice-rowa-taha-2kfde/
);

# Medium stories that are the same piece as a LinkedIn article (Medium slug prefix => LinkedIn URL).
# The site keeps the LinkedIn version and links to both originals.
my %SAME_AS = (
  'i-recently-graduated-with-my-llm'      => $LINKEDIN[1],
  'eu-ai-act-global-governance-mosaic'    => $LINKEDIN[2],
  'au-ai-framework'                       => $LINKEDIN[3],
  'the-council-of-europe-ai-convention'   => $LINKEDIN[4],
);

# LinkedIn sometimes answers with a login wall or stalls, so retry a few times.
sub fetch {
  my ($u, $must) = @_;
  for my $try (1..4) {
    my $out = `curl -s -L --max-time 30 -A "$UA" "$u"`; utf8::decode($out);
    return $out if !$must || index($out, $must) >= 0;
    sleep 3 * $try;
  }
  return '';
}
sub esc { my $s = shift // ''; $s =~ s/&/&amp;/g; $s =~ s/</&lt;/g; $s =~ s/>/&gt;/g; $s =~ s/"/&quot;/g; return $s; }
sub unent { my $s = shift; $s =~ s/&amp;/&/g; $s =~ s/&lt;/</g; $s =~ s/&gt;/>/g; $s =~ s/&quot;/"/g; $s =~ s/&#39;|&#x27;/'/g; return $s; }
sub slugify { my $s = lc shift; $s =~ s/[^a-z0-9]+/-/g; $s =~ s/^-+|-+$//g; $s = substr($s, 0, 70); $s =~ s/-+$//; return $s; }
my @MON = qw(January February March April May June July August September October November December);
my %MI = (Jan=>1,Feb=>2,Mar=>3,Apr=>4,May=>5,Jun=>6,Jul=>7,Aug=>8,Sep=>9,Oct=>10,Nov=>11,Dec=>12);
sub nice_date { my ($y,$m,$d) = split /-/, shift; return "$MON[$m-1] " . ($d+0) . ", $y"; }

# LinkedIn wraps outbound links in its own redirector; recover the real destination.
# Old Claude artifact links for the Africa project point at its page on this site instead.
sub real_url {
  my $u = unent(shift);
  if ($u =~ m{linkedin\.com/(?:redir/redirect|safety/go)/?\?.*?\burl=([^&]+)}) { ($u = $1) =~ s/%([0-9A-Fa-f]{2})/chr hex $1/ge; }
  $u = 'https://rowataha.com/africa-rights.html' if $u =~ m{claude\.ai/(?:code/)?artifact/};
  return esc($u);
}

# Reduce article HTML to clean, attribute-free markup the site's .post-body styles handle.
sub clean {
  my $h = shift;
  $h =~ s/<!--.*?-->//gs;
  $h =~ s/<img[^>]*medium\.com\/_\/stat[^>]*>//g;            # Medium tracking pixel
  $h =~ s/<\/?(?:div|span|section|picture|source|button|svg|path|noscript)\b[^>]*>//g;
  $h =~ s/<a\b[^>]*?href="([^"]*)"[^>]*>/'<a href="' . real_url($1) . '" target="_blank" rel="noopener">'/ge;
  $h =~ s/<img\b[^>]*?src="([^"]*)"[^>]*?(?:alt="([^"]*)")?[^>]*>/'<img src="'.$1.'" alt="'.($2\/\/'').'" loading="lazy">'/ge;
  $h =~ s/<(p|h[1-6]|ul|ol|li|blockquote|figure|figcaption|strong|em|b|i|u|pre|code|hr|br)\b[^>]*>/<$1>/g;
  $h =~ s/<(p|li|h[2-4]|blockquote)>/<$1 dir="auto">/g;                # Arabic paragraphs render right-to-left
  $h =~ s/<h1>/<h2>/g; $h =~ s/<\/h1>/<\/h2>/g;
  $h =~ s/[ \t]*\n[ \t\n]*/\n/g;
  $h =~ s/<p dir="auto">\s*(?:<br>\s*)*<\/p>//g;                         # empty paragraphs
  $h =~ s/<(strong|em|b|i)>\s*<\/\1>//g;
  $h =~ s/<h2 dir="auto">\s*Recommended by LinkedIn\s*<\/h2>\s*(?:<a [^>]*>.*?<\/a>\s*)*//gs;   # LinkedIn's mid-article promo box
  $h =~ s/^\s+|\s+$//g;
  return $h;
}
sub excerpt {
  my $t = shift; $t =~ s/<[^>]+>/ /g; $t = unent($t); $t =~ s/\*Arabic Below\*\s*//i; $t =~ s/\s+/ /g; $t =~ s/^\s+//;
  return length($t) > 200 ? substr($t, 0, 197) =~ s/\s+\S*$//r . '…' : $t;
}
sub words { my $t = shift; $t =~ s/<[^>]+>/ /g; my @w = split /\s+/, $t; return scalar @w; }

my @pieces;

# ---- LinkedIn ----
for my $u (@LINKEDIN) {
  my $p = fetch($u, 'article-main__content');
  my ($title) = $p =~ /<title>\s*(.*?)\s*<\/title>/s;
  $title = unent($title // ''); $title =~ s/\s*\|\s*LinkedIn\s*$//; $title =~ s/\s+$//;
  my ($date) = $p =~ /datePublished":"(\d{4}-\d\d-\d\d)/;
  my ($body) = $p =~ /(<div class="article-main__content".*?)<\/article>/s;
  die "Could not read $u\n" unless $title && $date && $body;
  push @pieces, { title => $title, date => $date, body => clean($body), links => [[ 'LinkedIn', $u ]] };
  print "LinkedIn: $title ($date)\n";
}
my %by_li = map { $_->{links}[0][1] => $_ } @pieces;

# ---- Medium (RSS has full text) ----
my $feed = fetch("https://medium.com/feed/\@rowataha9");
while ($feed =~ /<item>(.*?)<\/item>/gs) {
  my $it = $1;
  my ($title) = $it =~ /<title><!\[CDATA\[(.*?)\]\]><\/title>/s;
  my ($link)  = $it =~ /<link>(.*?)<\/link>/s; $link =~ s/\?.*//;
  my ($pd)    = $it =~ /<pubDate>\w+, (\d+) (\w+) (\d{4})/ ? sprintf('%04d-%02d-%02d', $3, $MI{$2}, $1) : '';
  my ($body)  = $it =~ /<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s;
  my ($slug)  = $link =~ /\/\@rowataha9\/(.*)$/;
  my ($dup) = grep { index($slug, $_) == 0 } keys %SAME_AS;
  if ($dup) { push @{ $by_li{$SAME_AS{$dup}}{links} }, [ 'Medium', $link ]; print "Medium (same as LinkedIn): $title\n"; next; }
  $body = clean($body);
  # Medium cuts long titles off with "…" in the feed; the full title is the story's first heading
  if ($title =~ s/…$// && $body =~ s/^<h[23] dir="auto">(\Q$title\E.*?)<\/h[23]>\s*//) { $title = $1; $title =~ s/<[^>]+>//g; }
  $body =~ s/^<h[23] dir="auto">\Q$title\E<\/h[23]>\s*//;   # Medium repeats the title as the first heading
  $title =~ s/^\s+|\s+$//g;
  $title = 'Digital Rights of Africa' if $title eq 'Digital Rigths of Africa';
  push @pieces, { title => unent($title), date => $pd, body => $body, links => [[ 'Medium', $link ]] };
  print "Medium: $title ($pd)\n";
}

@pieces = sort { $b->{date} cmp $a->{date} } @pieces;
for (@pieces) { $_->{slug} = "$_->{date}-" . slugify($_->{title}); $_->{mins} = int(words($_->{body}) / 230) + 1; $_->{excerpt} = excerpt($_->{body}); }

# ---- Page template (header + sidebar copied from the site's own article layout) ----
sub page {
  my (%a) = @_;   # depth (0 or 1), title, desc, url, main
  my $pre = $a{depth} ? '../' : '';
  open my $fh, '<', 'about.html' or die; local $/; my $t = <$fh>; close $fh;
  my ($head_end) = $t =~ /(<\/head>.*?<main class="content"[^>]*>)/s;
  my ($css) = $t =~ /(<style id="dd-strip-css">.*?<\/style>)/s;
  $head_end =~ s/<a href="about.html" class="active">/<a href="about.html">/;
  $head_end =~ s/<a href="writing.html">/<a href="writing.html" class="active">/g;
  $head_end =~ s/(href|src)="(?!https?:|#|\.\.\/)([^"]+)"/$1="$pre$2"/g;
  my $T = esc($a{title}); my $D = esc($a{desc});
  return <<"HTML";
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>$T · The Digital Divide</title>
<meta name="description" content="$D">
<meta property="og:type" content="article">
<meta property="og:title" content="$T">
<meta property="og:description" content="$D">
<meta property="og:url" content="https://rowataha.com/$a{url}">
<meta property="og:image" content="https://rowataha.com/assets/logo.png?v=2">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="${pre}assets/style.css">
<style>
.w-links{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 6px;font-family:'Inter',sans-serif}
.w-btn{display:inline-block;border:1px solid var(--rule);background:#fff;color:var(--ink);font:600 13px 'Inter',sans-serif;padding:8px 14px;border-radius:999px}
.w-btn:hover{border-color:var(--accent);color:var(--accent);text-decoration:none}
.w-src{font:600 11px 'Inter',sans-serif;letter-spacing:.6px;text-transform:uppercase;color:var(--accent)}
.post-body img{max-width:100%;height:auto;border-radius:6px}
.post-body [dir="rtl"],.post-body p:lang(ar){text-align:right}
.w-orig{margin-top:30px;padding-top:14px;border-top:1px solid var(--rule);font-family:'Inter',sans-serif;font-size:13px;color:var(--muted)}
</style>
</head>
<body>
$css
@{[ $head_end =~ s/^<\/head>\s*<body>\s*(?:<style id="dd-strip-css">.*?<\/style>)?//sr ]}
$a{main}
  </main>
</div>
<footer>
  <div class="wrap">
    © 2026 Rowa Taha. All rights reserved.<br>
    Also posted on <a href="https://substack.com/\@rowataha" target="_blank" rel="noopener">Substack</a>, <a href="$LINKEDIN_PROFILE" target="_blank" rel="noopener">LinkedIn</a> and <a href="$MEDIUM_PROFILE" target="_blank" rel="noopener">Medium</a>
  </div>
</footer>
<script src="${pre}assets/nav.js" defer></script>
</body>
</html>
HTML
}

sub src_label { join ' & ', map { $_->[0] } @{ shift->{links} } }

mkdir 'writing' unless -d 'writing';
for my $w (@pieces) {
  my $orig = join ' · ', map { qq(<a href="$_->[1]" target="_blank" rel="noopener">Read it on $_->[0] ↗</a>) } @{ $w->{links} };
  my $main = <<"M";
    <p><a href="../writing.html">← All writing</a></p>
    <article class="thought-article">
      <div class="thought-article-header">
        <div class="kicker">Originally published on @{[ src_label($w) ]}</div>
        <h2 dir="auto">@{[ esc($w->{title}) ]}</h2>
      </div>
      <div class="thought-byline">
        <img class="avatar" src="../assets/logo.png?v=2" alt="Rowa Taha">
        <div class="byline-text"><strong>Rowa Taha</strong> · @{[ nice_date($w->{date}) ]} · $w->{mins} min read</div>
      </div>
      <div class="post-body">
$w->{body}
      </div>
      <p class="w-orig">$orig</p>
    </article>
M
  open my $o, '>', "writing/$w->{slug}.html" or die; print $o page(depth => 1, title => $w->{title}, desc => $w->{excerpt}, url => "writing/$w->{slug}.html", main => $main); close $o;
}

my $cards = '';
for my $w (@pieces) {
  $cards .= <<"C";
<a class="thought-card" href="writing/$w->{slug}.html">
        <div class="thought-body">
          <div class="thought-eyebrow">@{[ src_label($w) ]}</div>
          <h3 dir="auto">@{[ esc($w->{title}) ]}</h3>
          <p class="excerpt" dir="auto">@{[ esc($w->{excerpt}) ]}</p>
          <div class="thought-meta">@{[ nice_date($w->{date}) ]} · $w->{mins} min read</div>
        </div>
      </a>
C
}
my $n = scalar @pieces;
my $index = <<"I";
    <h2>Writing</h2>
    <p style="color:var(--muted)">Everything I've published on LinkedIn and Medium, in one place: $n articles on AI governance, data rights, and tech policy. For my newer, more personal pieces, see <a href="thoughts.html">Rowa's Thoughts</a> and <a href="newsletter.html">the newsletter</a>.</p>
    <div class="w-links">
      <a class="w-btn" href="$LINKEDIN_PROFILE" target="_blank" rel="noopener">Follow me on LinkedIn ↗</a>
      <a class="w-btn" href="$MEDIUM_PROFILE" target="_blank" rel="noopener">Follow me on Medium ↗</a>
      <a class="w-btn" href="https://substack.com/\@rowataha" target="_blank" rel="noopener">Substack ↗</a>
    </div>
    <hr class="rule">
    <div class="thought-list">$cards</div>
I
open my $o, '>', 'writing.html' or die; print $o page(depth => 0, title => 'Writing', desc => "All of Rowa Taha's articles from LinkedIn and Medium on AI governance, data rights and tech policy.", url => 'writing.html', main => $index); close $o;
print "\nWrote $n pieces + writing.html\n";
