let id = window.location.search.match('[0-9]{8,}');
let a = document.querySelector('#textLink')
a.href = `https://text.npr.org/${id}`;
a.text = 'go to text-only version';

// vim:ts=4 sts=4 sw=4 et
