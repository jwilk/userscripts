let imgs = document.querySelectorAll('img[data-srcset]');
for (let img of imgs) {
    let picture = document.createElement('picture');
    img.parentNode.replaceChild(picture, img);
    let source = document.createElement('source');
    source.srcset = img.dataset.srcset;
    picture.appendChild(source);
    picture.appendChild(img);
}
let elts = document.querySelectorAll('source[data-srcset]');
for (let elt of elts) {
    elt.srcset = elt.dataset.srcset;
};

// vim:ts=4 sts=4 sw=4 et
