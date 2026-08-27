const params = {
    name: 'redesign_optout',
    value: 'true',
};
cookieStore.get(params.name).then(function(cookie) {
    if (cookie !== null)
        return;
    cookieStore.set(params).then(function() {
        location.reload();
    });
});

// vim:ts=4 sts=4 sw=4 et
