let url = document.title;
if (url.match(/^https?:[/][/]\S+$/)) {
    window.location = url;
}

// vim:ts=4 sts=4 sw=4 et
