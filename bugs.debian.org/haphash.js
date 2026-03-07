async function solve(progress) {
    const challenge = document.cookie.match(/pow_challenge=([^;]+)/)[1];
    const params = new URLSearchParams(location.search);
    const orig_url = params.get('original') || '/';
    const encoder = new TextEncoder()
    for (let i = 0; ; i++) {
        if (await cookieStore.get('pow_nonce'))
            break;
        progress.value = i;
        progress.max = i + 0xFFFF;
        const message = `${challenge};${i}`;
        const bytes = encoder.encode(message);
        const hash = await window.crypto.subtle.digest('SHA-256', bytes);
        const ahash = new Uint8Array(hash);
        if (ahash[0] || ahash[1])
            continue;
        await cookieStore.set({name: 'pow_nonce', value: i});
        break;
    }
    location.href = orig_url;
}

if (location.pathname == '/challenge.html') {
    let progress = document.createElement('progress');
    progress.style.width = '100%';
    progress.value = 0;
    progress.max = 0xFFFF;
    document.body.appendChild(progress);
    let button = document.createElement('button');
    button.textContent = 'Challenge accepted!';
    button.onclick = function() { solve(progress); };
    document.body.appendChild(button);
}

// vim:ts=4 sts=4 sw=4 et
