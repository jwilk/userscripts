let elts = document.querySelectorAll('input[name^="set_"][value="false"]');
for (let elt of elts) {
    elt.click();
}
let elt = document.querySelector('input[type="submit"][value="I agree"]');
if (elt !== null) {
    elt.disabled = true;
}

// vim:ts=4 sts=4 sw=4 et
