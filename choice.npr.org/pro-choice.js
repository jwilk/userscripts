let id = window.location.search.match('[0-9]{9,}');
let a = document.querySelector('#textLink')
a.href = `https://text.npr.org/s.php?sId=${id}`;

// vim:ts=4 sts=4 sw=4 et
