// ==UserScript==
// @name anti-amp
// @description Redirect AMP to non-AMP
// @namespace jwilk@jwilk.net
// @include *
// @grant none
// ==/UserScript==

if (document.documentElement.getAttribute('⚡') !== null) {
    let new_location = document.head.querySelector('link[rel="canonical"]').href;
    if (window.location != new_location)
        window.location = new_location;
}
