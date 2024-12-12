(function () {
    "use strict";
    let y;
    window.addEventListener('scroll', function () {
        y = window.scrollY;
        switch (true) {
            case y < 500:
                document.body.className = 'one';
                break;
            case y < 1000:
                document.body.className = 'two';
                break;
            case y < 1500:
                document.body.className = 'three';
                break;
            case y < 2000:
                document.body.className = 'four';
                break;
            default:
                document.body.className = 'five';
                break;
        }
    });
})();