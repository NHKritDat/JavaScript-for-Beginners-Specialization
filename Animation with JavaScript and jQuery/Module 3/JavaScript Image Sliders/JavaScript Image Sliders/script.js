window.addEventListener('load', function () {
    'use strict';
    //How many slides?
    const slideCount = this.document.querySelectorAll('#slider-wrapper ul li').length;
    //How wide is each slide?
    const slideWidth = this.document.querySelector('#slider-wrapper').offsetWidth;
    //Total slide width
    const totalWidth = slideCount * slideWidth + 'px';
    //DOM
    const slider = this.document.querySelector('#slider-wrapper ul');
    const next = this.document.querySelector('#next');
    const prev = this.document.querySelector('#prev');

    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    next.addEventListener('click', function (evt) {
        evt.preventDefault();
        counter++;
        if (counter === slideCount)
            counter = 0;
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;

    });

    prev.addEventListener('click', function (evt) {
        evt.preventDefault();
        counter--;
        if (counter < 0)
            counter = slideCount - 1;
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });
});