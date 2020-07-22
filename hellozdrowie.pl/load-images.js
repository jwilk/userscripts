let imgs = document.querySelectorAll('img[data-original]');
for (let img of imgs) {
    img.src = img.dataset.original;
    img.style.opacity = 1;
}

// vim:ts=4 sts=4 sw=4 et

