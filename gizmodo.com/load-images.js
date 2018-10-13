let lazy_sources = document.querySelectorAll('source[data-srcset]');
for (let source of lazy_sources) {
    if (source.media)
        continue;
    source.srcset = source.dataset.srcset;
}

// vim:ts=4 sts=4 sw=4 et
