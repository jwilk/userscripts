let lazy_images = document.querySelectorAll('progressive-image');
for (let lazy_img of lazy_images) {
    let img = document.createElement('img');
    img.src = lazy_img.getAttribute('src');
    img.alt = lazy_img.getAttribute('alt');
    img.width = lazy_img.dataset.width;
    img.height = lazy_img.dataset.height;
    lazy_img.replaceWith(img);
}

// vim:ts=4 sts=4 sw=4 et
