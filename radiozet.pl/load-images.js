let elts = document.querySelectorAll('source[data-srcset]');
for (let elt of elts) {
    elt.srcset = elt.dataset.srcset + ' ' + elt.dataset.width + ' ' + elt.dataset.height;
}
elts = document.querySelectorAll('img.lazyload');
for (let elt of elts) {
    elt.src = elt.dataset.src;
    elt.style.display = 'initial';
}

// vim:ts=4 sts=4 sw=4 et
