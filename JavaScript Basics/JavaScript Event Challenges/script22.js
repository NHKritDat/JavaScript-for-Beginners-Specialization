(function () {
    "use strict";
    const button = document.querySelector('button');
    const paragraph = document.querySelector('p');
    button.addEventListener('click', function () {
        paragraph.style.color = 'green';
    });
})();