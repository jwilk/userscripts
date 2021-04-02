let elts = document.querySelectorAll('input[name^="set_"][value="false"]');
for (let elt of elts) {
    elt.click();
}

// vim:ts=4 sts=4 sw=4 et
