// ==UserScript==
// @name anti-amp
// @description Redirect AMP to non-AMP
// @namespace jwilk@jwilk.net
// @include *
// @grant none
// ==/UserScript==

if (document.documentElement.getAttribute('⚡') !== null)
    window.location = document.head.querySelector('link[rel="canonical"]').href;
