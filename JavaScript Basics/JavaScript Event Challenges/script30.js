(function () {
    "use strict";
    window.addEventListener('keydown', function (e) {
        switch (e.key) {
            case 'b':
                document.body.className = 'one';
                break;
            case 'v':
                document.body.className = 'two';
                break;
            case 'c':
                document.body.className = 'three';
                break;
            case 'f':
                document.body.className = 'four';
                break;
            case 'g':
                document.body.className = 'five';
                break;
            default:
                alert('Please press B, V, C, F, or G');
                break;
        }
    });
})();