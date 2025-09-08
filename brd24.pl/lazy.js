let lazy_images = document.querySelectorAll('img[data-lazyloaded]');
for (let img of lazy_images) {
    img.src = img.dataset.src;
}

// vim:ts=4 sts=4 sw=4 et
