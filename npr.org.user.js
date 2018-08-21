// ==UserScript==
// @name npr.org
// @description Fix the "Decline ..." button on NPR's "Data Protection Choices" page
// @namespace jwilk@jwilk.net
// @include https://choice.npr.org/*
// @grant none
// ==/UserScript==

document.querySelector('#textLink').href = 'https://text.npr.org/s.php?sId=' + window.location.search.match('[0-9]{9,}');
