let elts = document.querySelectorAll('a[data-001]');
for (let elt of elts) {
    if (elt.href === '') {
        elt.href = '/sowacgi.php?KatID=0&typ=record&001=' + elt.dataset['001']
    }
}

// vim:ts=4 sts=4 sw=4 et
