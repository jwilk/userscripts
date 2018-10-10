// ==UserScript==
// @name anti-amp
// @description Redirect AMP to non-AMP
// @namespace jwilk@jwilk.net
// @include *
// @grant none
// ==/UserScript==

let elt = document.documentElement;
if (elt.getAttribute('⚡') !== null || elt.getAttribute('amp') !== null) {
    let new_location = document.head.querySelector('link[rel="canonical"]').href;
    if (window.location != new_location)
        window.location = new_location;
}

// vim:ts=4 sts=4 sw=4 et
