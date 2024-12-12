(function () {
    "use strict";
    const button = document.querySelector('button');
    const allPs = document.querySelectorAll('p');
    button.addEventListener('click', function () {
        for (let i = 0; i < allPs.length; i++) {
            allPs[i].style.color = 'green';
        }
    });
})();