let btn = document.querySelector('.issues-listing .gh-header-show .js-details-target');
if (btn !== null) {
    btn.addEventListener('click', function() {
        let elt = document.querySelector('.issues-listing .gh-header-edit');
        if (elt !== null)
            elt.style['display'] = 'block';
    });
}

// vim:ts=4 sts=4 sw=4 et
