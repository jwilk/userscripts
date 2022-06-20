let lazy_images = document.querySelectorAll('img.lazy-img__image');
for (let img of lazy_images) {
    img.src = img.dataset.nativeSrc;
    img.classList.add('loaded');
}
lazy_images = document.querySelectorAll('img.dvz-lazy');
for (let img of lazy_images) {
    let widths = JSON.parse(img.dataset.widths);
    let pattern = img.dataset.pattern;
    let srcset = widths.map(wd => pattern.replace('{{size}}', wd) + ` ${wd}w`);
    img.srcset = srcset.join(', ');
}

// vim:ts=4 sts=4 sw=4 et
