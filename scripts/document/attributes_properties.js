// #1 Get the attribute
/*
alert(document.querySelector('[data-widget-name]').dataset.widgetName);
*/

// #2 Make external links orange

let links = document.querySelectorAll('li a');

for(let link of links) {
    let href = link.getAttribute('href');

    if ((href.indexOf('://')+1) && !(href.indexOf('http://internal.com')+1)) {
        link.style.color = 'orange';
    }
}