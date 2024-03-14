let root = document.querySelector('#root');
if (root.childElementCount == 0) {
    let meta = document.querySelector('meta[name="twitter:image"]');
    let img = document.createElement('img');
    img.src = meta.content;
    root.appendChild(img);
}

// vim:ts=4 sts=4 sw=4 et
