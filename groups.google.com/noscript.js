let noscript = document.querySelector('noscript');
let loc = window.location;
let path_re = new RegExp('^/forum/(m/)?$');
if (noscript && loc.pathname.match(path_re)) {
    let match = loc.hash.match(/^#!(.+)/);
    if (match) {
        let elt = document.createElement('a');
        elt.text = 'plain HTML version';
        elt.href = '/forum/?_escaped_fragment_=' + encodeURIComponent(match[1]);
        document.body.appendChild(elt);
    }
}

// vim:ts=4 sts=4 sw=4 et
