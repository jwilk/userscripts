let elts = document.querySelectorAll('a[href*="ref_="]');
for (let a of elts) {
    a.href = a.href.replace(/[?]ref_=[^&]+/, "");
}
let imgs = document.querySelectorAll('img.loadlate');
for (let img of imgs) {
    console.log(img);
    img.src = img.getAttribute('loadlate');
    img.classList.remove('hidden');
}

// vim:ts=4 sts=4 sw=4 et
