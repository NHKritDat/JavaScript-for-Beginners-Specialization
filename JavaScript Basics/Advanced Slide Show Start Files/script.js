(function () {
    "use strict";
    const myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    const myContent = document.getElementById("content");
    let currentImage = 0;

    document.getElementById("next").addEventListener("click", function (event) {
        event.preventDefault();
        currentImage++;
        if (currentImage > myImages.length - 1) {
            currentImage = 0;
        }
        swapImg();
    });

    document.getElementById('previous').addEventListener('click', function (event) {
        event.preventDefault();
        currentImage--;
        if (currentImage < 0) {
            currentImage = myImages.length - 1;
        }
        swapImg();
    });

    function swapImg() {
        const newImg = document.createElement("img");
        newImg.src = `slides/${myImages[currentImage]}`;
        newImg.className = "fadeinimg";
        myContent.appendChild(newImg);
        if (myContent.children.length > 2) {
            myContent.removeChild(myContent.children[0]);
        }
    }
})();