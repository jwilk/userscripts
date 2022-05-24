let lazy_images = document.querySelectorAll('img.lazy-image-van');
for (let img of lazy_images) {
    img.sizes = img.dataset.sizes;
    img.srcset = img.dataset.srcset;
}

// vim:ts=4 sts=4 sw=4 et
