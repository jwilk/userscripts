if (document.querySelector('img') === null) {
    for (let script of document.querySelectorAll('script')) {
        let match = script.text.match(/preloadImages = \["(https:\/\/i.pinimg.com\/originals\/.+)"\]/);
        if (match === null)
            continue;
        let img = document.createElement('img');
        img.src = match[1];
        document.body.appendChild(img);
        break;
    }
}

// vim:ts=4 sts=4 sw=4 et
