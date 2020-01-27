let elts = document.querySelectorAll('a[href*="ref_="]');
for (let a of elts) {
    a.href = a.href.replace(/[?]ref_=[^&]+/, "");
}

// vim:ts=4 sts=4 sw=4 et
