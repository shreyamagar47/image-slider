
const images = [
    "./mm.jpg",
    "./mm2.jpg",
    "./mm3.jpg"
];

let currentIndex = 0;

function showImage() {
    document.getElementById("main-image").src =
        images[currentIndex];
}

function next() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
}

function prev() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
}
