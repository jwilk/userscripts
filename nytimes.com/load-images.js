let figures = document.querySelectorAll('figure[itemprop="associatedMedia"]');
for (let figure of figures)
{
    let img = figure.querySelector('img');
    if (img === null) {
        let div = figure.querySelector('div');
        if (div !== null) {
            img = document.createElement('img');
            img.src = figure.getAttribute('itemid');
            div.replaceWith(img);
        }
    }
}

// vim:ts=4 sts=4 sw=4 et
