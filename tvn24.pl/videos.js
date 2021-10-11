let videos = document.querySelectorAll('.video-wrapper.hideVideoPlayer');
for (let video of videos) {
    let script = video.querySelector('script');
    if (script === null)
        continue;
    script = script.text;
    let data = JSON.parse(script.match(/initVideo[(]'[\w-]+', *([{].*[}][}])/)[1]);
    data = data.movie.video.sources.mp4;
    for (let key in data) {
        let url = data[key];
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = url;
        a.text = key + 'p';
        li.style.listStyle = 'disc';
        li.appendChild(a);
        ul.appendChild(li);
        video.appendChild(ul);
    }
}

// vim:ts=4 sts=4 sw=4 et

