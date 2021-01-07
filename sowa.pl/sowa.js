let elts = document.querySelectorAll('a[data-001]');
for (let elt of elts) {
    if (elt.href === '') {
        elt.href = '/sowacgi.php?KatID=0&typ=record&001=' + elt.dataset['001']
    }
}
elts = document.querySelectorAll('div[onclick]');
for (let elt of elts) {
    let action = elt.getAttribute('onclick');
    let match = action.match("^location[.]href='(https:.*)'$");
    if (match !== null) {
        let url = match[1];
        let a = document.createElement('a');
        a.href = url;
        elt.parentNode.replaceChild(a, elt);
        elt.removeAttribute('onclick');
        a.appendChild(elt);
    }
}

// vim:ts=4 sts=4 sw=4 et
