let imgs = document.querySelectorAll('img.lazyload');
for (let img of imgs) {
    img.src = img.dataset.src;
    img.style.opacity = 1;
}

// vim:ts=4 sts=4 sw=4 et
