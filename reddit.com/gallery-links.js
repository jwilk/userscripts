let title_links = document.querySelectorAll('a.title[href^="https://www.reddit.com/gallery/"]');
for (let title_link of title_links) {
    let elt = title_link;
    while (elt !== null && !elt.classList.contains('entry'))
        elt = elt.parentNode;
    if (elt === null)
        break;
    let comments_link = elt.querySelector('a.comments');
    if (comments_link === null)
        break;
    title_link.href = comments_link.href;
}

// vim:ts=4 sts=4 sw=4 et
