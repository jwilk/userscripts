let pics = document.querySelectorAll('picture.lazyloader--lazy');
for (let pic of pics) {
    pic.classList.remove('lazyloader--lowres');
    let srcs = pic.querySelectorAll('source');
    for (let src of srcs) {
        src.srcset = src.srcset.replace(/[?].*/, '');
    }
}

// vim:ts=4 sts=4 sw=4 et
