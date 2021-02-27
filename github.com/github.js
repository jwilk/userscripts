let btn = document.querySelector('#show_issue .gh-header-show button[aria-label="Edit Issue title"]');
if (btn !== null) {
    btn.addEventListener('click', function() {
        let elt = document.querySelector('#show_issue .gh-header-edit');
        if (elt !== null)
            elt.style['display'] = 'block';
    });
}

// vim:ts=4 sts=4 sw=4 et
