let elt = document.querySelector('div[data-photo-carousel]');
if (elt !== null) {
    let loader = elt.querySelector('div.loader');
    if (loader !== null) {
        let data = JSON.parse(elt.dataset.photoCarousel)
        let img = document.createElement('img');
        img.src = data.items[0].normal;
        let cloader = loader.parentElement;
        cloader.replaceChild(img, loader);
        cloader.style.paddingBottom = '0';
    }
}

// vim:ts=4 sts=4 sw=4 et
