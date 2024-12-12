(function () {
    'use strict';
    let convertType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (key == 'k') {
            convertType = 'kilometers';
            heading.innerHTML = 'Kilometers to Miles Converter';
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';
        }
        else if (key == 'm') {
            convertType = 'miles';
            heading.innerHTML = 'Miles to Kilometers Converter';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const distance = document.getElementById('distance').value;
        if (distance) {
            switch (convertType) {
                case 'miles':
                    answerDiv.innerHTML = `<h2>${distance} miles converts to ${(distance * 1.609344).toFixed(3)} kilimeters</h2>`;
                    break;
                case 'kilometers':
                    answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${(distance * 0.621371192).toFixed(3)} meters</h2>`;
                    break;
            }
        }
        else {
            answerDiv.innerHTML = '<h2>Please provide a number!</h2>';
        }
    });

})();