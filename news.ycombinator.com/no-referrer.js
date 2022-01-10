let elts = document.querySelectorAll('a[href^="http://www.jwz.org/"], a[href^="https://www.jwz.org/"]');
for (let elt of elts) {
    elt.referrerPolicy = 'no-referrer';
}

// vim:ts=4 sts=4 sw=4 et
