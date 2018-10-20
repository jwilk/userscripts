let lazy_images = document.querySelectorAll('img.lazy')
for (let img of lazy_images) {
    img.src = img.dataset.original;
}

// vim:ts=4 sts=4 sw=4 et
