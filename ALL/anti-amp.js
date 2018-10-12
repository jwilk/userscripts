if (document.querySelector(':root[⚡], :root[amp]')) {
    let new_location = document.head.querySelector('link[rel="canonical"]').href;
    if (window.location != new_location)
        window.location = new_location;
}

// vim:ts=4 sts=4 sw=4 et
