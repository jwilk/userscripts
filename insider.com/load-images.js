let imgs = document.querySelectorAll('img[data-srcs]');
for (let img of imgs) {
    let srcs = JSON.parse(img.dataset.srcs);
    img.src = Object.keys(srcs)[0];
    img.style.opacity = 1;
}

// vim:ts=4 sts=4 sw=4 et
