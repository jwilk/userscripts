let noscript = document.querySelector('noscript');
let loc = window.location;
if (noscript && loc.pathname == '/forum/') {
    let match = loc.hash.match(/^#!(.+)/);
    if (match) {
        console.log(noscript);
        console.log(match);
        let elt = document.createElement('a');
        elt.text = 'plain HTML version';
        elt.href = 'm/?_escaped_fragment_=' + encodeURIComponent(match[1]);
        document.body.appendChild(elt);
    }
}

// vim:ts=4 sts=4 sw=4 et
