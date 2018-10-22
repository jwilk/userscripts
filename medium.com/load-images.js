let lazy_images = document.querySelectorAll('img.progressiveMedia-image');
for (let img of lazy_images) {
    let wd = img.parentElement.offsetWidth;
    img.src = img.dataset.src;
    img.className = 'progressiveMedia-noscript';
}

// vim:ts=4 sts=4 sw=4 et
