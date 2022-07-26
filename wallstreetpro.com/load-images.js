let imgs = document.querySelectorAll('img.lazyload');
for (let img of imgs) {
    img.srcset = img.dataset.srcset;
    img.style.display = 'block';
    img.style.opacity = 1;
}

// vim:ts=4 sts=4 sw=4 et
