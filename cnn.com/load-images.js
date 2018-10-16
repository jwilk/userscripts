let lazy_images = document.querySelectorAll('img[data-demand-load]');
for (let img of lazy_images) {
    img.src = img.dataset.srcLarge;
}

// vim:ts=4 sts=4 sw=4 et
