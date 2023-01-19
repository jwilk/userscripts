let btn = document.querySelector('#show_issue .gh-header-show button[aria-label="Edit Issue title"]');
if (btn !== null) {
    btn.addEventListener('click', function() {
        let elt = document.querySelector('#show_issue .gh-header-edit');
        if (elt !== null)
            elt.style['display'] = 'block';
    });
}
btn = document.querySelector('button.js-profile-editable-edit-button');
if (btn !== null) {
    btn.addEventListener('click', function() {
        document.location = '/settings/profile';
    });
}
let anchors = document.querySelectorAll('.anchor[id^="user-content-"]');
for (let anchor of anchors) {
    let id = anchor.id.replace(/^user-content-/, '')
    if (document.getElementById(id) === null) {
        anchor.id = id;
    }
}
let elts = document.querySelectorAll('*[aria-expanded="false"]');
for (let elt of elts) {
    elt.setAttribute('aria-expanded', 'true');
}
elts = document.querySelectorAll('relative-time');
for (let elt of elts) {
    elt.setAttribute('title', elt.getAttribute('datetime'));
}

// vim:ts=4 sts=4 sw=4 et
