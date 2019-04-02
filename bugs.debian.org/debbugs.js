let elts = document.querySelectorAll('img[src^="/cgi-bin/libravatar.cgi?"]');
for (let p of elts) {
    p.src = 'data:text/plain,';
}

// vim:ts=4 sts=4 sw=4 et
