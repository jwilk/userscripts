let lazy_images = document.querySelectorAll('img.lazyLoad, source[data-srcset]');
for (let img of lazy_images) {
    img.src = img.dataset.src;
    img.srcset = img.dataset.srcset;
}

// vim:ts=4 sts=4 sw=4 et
