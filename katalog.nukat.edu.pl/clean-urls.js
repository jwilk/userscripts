let url = window.location.href;
let orig_url = url;
url = url.replace(/[&?]theme=nukat$/, '');
url = url.replace(/[&?]fromLocationLink=false$/, '');
if (url != orig_url)
    history.replaceState({}, '', url);

// vim:ts=4 sts=4 sw=4 et
