let elt = document.querySelector('a.link-action[data-url="/user/logout"]');
elt.addEventListener('click', function(evt) {
    evt.preventDefault();
    let url = new URL(elt.dataset.url, location);
    fetch(url, {"method": "POST"}).then(function() {
        location.reload();
    });
});

// vim:ts=4 sts=4 sw=4 et
