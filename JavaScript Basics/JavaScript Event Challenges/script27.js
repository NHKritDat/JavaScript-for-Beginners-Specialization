(function () {
    "use strict";
    let num;
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        num = this.querySelector('input').value;
        if (isNaN(num)) {
            alert('Please enter a valid number');
        } else {
            document.querySelector('h1').style.fontSize = num + 'px';
        }
    });
})();