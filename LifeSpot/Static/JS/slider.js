
let offset = 0; // смещение от левого края

function fSliderNext() {
    const sliderLine = document.querySelector('.slider-line');

    offset += 1000;
    if (offset > 2000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}

function fSliderPrev() {
    const sliderLine = document.querySelector('.slider-line');

    offset -= 1000;
    if (offset < 0) {
        offset = 2000;
    }
    sliderLine.style.left = -offset + 'px';
}