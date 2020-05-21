let lazy_images = document.querySelectorAll('img[data-lazy-src]');
for (let img of lazy_images) {
    img.src = img.dataset.lazySrc;
}

// vim:ts=4 sts=4 sw=4 et

