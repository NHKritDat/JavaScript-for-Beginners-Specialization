(function () {
    "use strict";
    const div = document.querySelector('div');
    div.addEventListener('mouseover', function () {
        div.className = 'big';
    });
    div.addEventListener('mouseout', function () {
        div.className = '';
    });
})();