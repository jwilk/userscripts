let match = document.location.pathname.match(/^\/file\/d\/([\w-]+)\/view$/);
if (match !== null) {
    let id = match[1];
    let elt = document.createElement('a');
    elt.text = 'download'
    elt.href = 'https://drive.google.com/uc?export=download&id=' + id;
    document.body.appendChild(elt);
}

// vim:ts=4 sts=4 sw=4 et
