if (document.location.pathname === '/') {
    let match = document.location.hash.match(/#feat=([\w-]+)/);
    if (match !== null) {
        let feat = match[1];
        document.location = '/' + feat;
    }
}

// vim:ts=4 sts=4 sw=4 et
