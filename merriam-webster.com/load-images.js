let lazy_images = document.querySelectorAll('img.lazyload');
for (let img of lazy_images) {
    img.src = img.dataset.src;
    img.srcset = img.dataset.srcset;
    img.style.opacity = 1;
}

// vim:ts=4 sts=4 sw=4 et

