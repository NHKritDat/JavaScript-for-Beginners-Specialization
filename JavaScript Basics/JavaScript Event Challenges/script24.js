(function(){
    "use strict";
    const button = document.querySelector('button');
    const div = document.querySelector('div');
    button.addEventListener('click', function () {
        const p = document.createElement('p');
        const text = document.createTextNode('A new paragraph');
        p.appendChild(text);
        div.appendChild(p);
    });
})();