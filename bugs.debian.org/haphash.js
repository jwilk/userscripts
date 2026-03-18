async function solve(progress) {
    const cookie = await cookieStore.get('pow_challenge');
    const challenge = cookie.value;
    const encoder = new TextEncoder()
    for (let i = 0; ; i++) {
        progress.value = i;
        progress.max = i + 0xFF;
        const message = `${challenge};${i}`;
        const bytes = encoder.encode(message);
        const hash = await window.crypto.subtle.digest('SHA-256', bytes);
        const ahash = new Uint8Array(hash);
        if (ahash[0])
            continue;
        await cookieStore.set({name: 'pow_nonce', value: i});
        break;
    }
}

function cookie_monitor(event)
{
    for (const cookie of event.changed) {
        if (cookie.name == 'pow_nonce') {
            const params = new URLSearchParams(location.search);
            const orig_url = params.get('original') || '/';
            location.href = orig_url;
        }
    }
}

if (location.pathname == '/challenge.html') {
    cookieStore.addEventListener('change', cookie_monitor);
    let progress = document.querySelector('progress');
    if (progress === null) {
        progress = document.createElement('progress');
        progress.style.width = '100%';
        progress.value = 0;
        progress.max = 0xFF;
        document.body.appendChild(progress);
        let button = document.createElement('button');
        button.textContent = 'Challenge accepted!';
        button.onclick = function() { solve(progress); };
        document.body.appendChild(button);
    }
}

// vim:ts=4 sts=4 sw=4 et
