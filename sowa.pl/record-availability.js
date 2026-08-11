let elts = document.querySelectorAll('.record-availability-summary');
for (const elt of elts) {
    elt.classList.add('record-availability-hidden');
}

elts = document.querySelectorAll('.record-availability-details');
for (const elt of elts) {
    elt.classList.remove('record-availability-hidden');
}

// vim:ts=4 sts=4 sw=4 et
