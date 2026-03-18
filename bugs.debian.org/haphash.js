async function solve() {
    const bar = document.getElementById('progressBar');
    bar.innerText = '🌀';
    const cookie = await cookieStore.get('pow_challenge');
    const challenge = cookie.value;
    const encoder = new TextEncoder()
    for (let i = 0; ; i++) {
        bar.style.rotate = `${i}deg`;
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
            const bar = document.getElementById('progressBar');
            bar.innerText = '✅';
            bar.style.rotate = '';
            const params = new URLSearchParams(location.search);
            const orig_url = params.get('original') || '/';
            location.href = orig_url;
        }
    }
}

if (location.pathname != '/challenge.html')
    return;
let button = document.querySelector('button');
if (button !== null)
    return;
button = document.createElement('button');
button.textContent = 'Challenge accepted!';
button.onclick = solve;
document.body.appendChild(button);
cookieStore.addEventListener('change', cookie_monitor);

// vim:ts=4 sts=4 sw=4 et
