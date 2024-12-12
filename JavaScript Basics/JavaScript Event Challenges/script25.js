(function () {
    "use strict";
    const allBtns = document.querySelectorAll('button');
    const div = document.querySelector('div');
    allBtns[0].addEventListener('click', function () {
        const p = document.createElement('p');
        const text = document.createTextNode('A new paragraph');
        p.appendChild(text);
        div.appendChild(p);
    });
    allBtns[1].addEventListener('click', function () {
        div.removeChild(div.lastChild);
    });
}());