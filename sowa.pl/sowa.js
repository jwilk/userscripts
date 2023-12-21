let elts = document.querySelectorAll('a[data-001]');
for (let elt of elts) {
    if (elt.href === '') {
        elt.href = '/index.php?KatID=0&typ=record&001=' + elt.dataset['001']
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
elts = document.querySelectorAll('a[href^="javascript:Konto("]');
for (let elt of elts) {
    let url = elt.href;
    let match = url.match("^javascript:Konto[(]0\\s*,'(\\w+)',\\s*'',\\s*''[)];$");
    if (match !== null) {
        let id = match[1];
        elt.href = `/index.php?KatID=0&typ=acc&id=${id}`;
    }
}

// vim:ts=4 sts=4 sw=4 et
