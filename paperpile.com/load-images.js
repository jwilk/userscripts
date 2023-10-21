let lazy_images = document.querySelectorAll('img[data-lazy-srcset]');
for (let img of lazy_images) {
    img.srcset = img.dataset.lazySrcset;
}

// vim:ts=4 sts=4 sw=4 et

