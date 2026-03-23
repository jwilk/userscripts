let div = document.querySelector('div.IPaper');
if (div !== null && div.childElementCount == 0) {
    let params = div.dataset.params;
    params = JSON.parse(params);
    let paper_url = params.paperUrl;
    paper_url += '/GetPDF.ashx';
    let link = document.createElement('a');
    link.href = paper_url;
    link.text = 'PDF'
    div.appendChild(link);
}

/* vim:set ts=4 sts=4 sw=4 et: */
