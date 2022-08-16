let imgs = document.querySelectorAll('img.loading');
for (let img of imgs) {
    let url = new URL(img.src);
    url.search = '';
    img.src = url.href;
    img.style.filter = 'revert';
}

// vim:ts=4 sts=4 sw=4 et
