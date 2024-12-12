(function () {
    "use strict";
    const allBtns = document.querySelectorAll('button');
    const div = document.querySelector('div');
    let num = 1;
    allBtns[0].addEventListener('click', function () {
        const p = document.createElement('p');
        const text = document.createTextNode('This is paragraph number ' + ++num);
        p.appendChild(text);
        div.appendChild(p);
    });
    allBtns[1].addEventListener('click', function () {
        if (num === 1) {
            alert('You are trying to delete last paragraph');
        }
        else {
            div.removeChild(div.lastChild);
            num--;
        }
    });
})();