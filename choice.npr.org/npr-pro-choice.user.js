// ==UserScript==
// @name npr-pro-choice
// @description Fix the "Decline ..." button on NPR's "Data Protection Choices" page
// @namespace jwilk@jwilk.net
// @include https://choice.npr.org/*
// @grant none
// ==/UserScript==

document.querySelector('#textLink').href = 'https://text.npr.org/s.php?sId=' + window.location.search.match('[0-9]{9,}');

// vim:ts=4 sts=4 sw=4 et