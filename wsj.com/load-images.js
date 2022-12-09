let divs = document.querySelectorAll('div[data-image][data-toload="true"]');
for (let div of divs) {
    let img = div.querySelector('img');
    img.src = div.dataset.image;
    img.style.filter = 'revert';
}

// vim:ts=4 sts=4 sw=4 et
