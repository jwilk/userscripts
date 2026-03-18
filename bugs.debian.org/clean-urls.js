// idea stolen from https://chris-lamb.co.uk/posts/faking-cleaner-urls-in-the-debian-bts

const match = location.href.match('^https://bugs[.]debian[.]org/cgi-bin/bugreport[.]cgi[?]bug=([0-9]+)(#.*)?$');
if (!match)
    return;
const n = match[1];
const links = document.getElementsByTagName('a');
for (const link of links)
    link.href = link.href; // make links absolute
history.replaceState(null, '', `/${n}${location.hash}`);

// vim:ts=4 sts=4 sw=4 et
