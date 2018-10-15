let elts = document.querySelectorAll('p.nbswitch');
for (let p of elts) {
    if (p.style.display == 'none') {
        p.style.removeProperty('display');
        p.style.opacity = 0.5;
    }
}

// vim:ts=4 sts=4 sw=4 et
