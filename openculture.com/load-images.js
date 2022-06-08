let lazy_images = document.querySelectorAll('img.lazy')
for (let img of lazy_images) {
    img.src = img.dataset.src;
    console.log(img.dataset.srcset);
    if (img.dataset.srcset !== undefined) {
        img.srcset = img.dataset.srcset;
    }
    img.classList.remove('lazy-hidden');
}

// vim:ts=4 sts=4 sw=4 et
