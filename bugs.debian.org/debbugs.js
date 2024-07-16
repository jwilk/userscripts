let elts = document.querySelectorAll('img[src^="/cgi-bin/libravatar.cgi?"]');
for (let elt of elts) {
    elt.src = 'data:text/plain,';
    elt.style.display = 'none';
}

// vim:ts=4 sts=4 sw=4 et
