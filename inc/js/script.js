"use strict";

const matrix = document.getElementById('matrix');
const sliders = document.querySelectorAll('input[type="range"]');
const btn = document.getElementById('playBtn');

// Animate Filter
let i = 1;
function animate() {
    matrix.setAttribute('values', i);
    if (btn.getAttribute('data-playing') === "true") {
        i++;
    }
    window.requestAnimationFrame(animate);
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animate();
}


sliders.forEach(slider => {
    slider.addEventListener('input', function() {
        let sliderFilter, val;
        switch (this.id) {
            case 'matrixSlider':
                let value =  `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${this.value} 0 0 0 0`;
                applySliderValue('matrix02', value, 'values')
                break;
            case 'bFreqSlider':
                applySliderValue('turb', this.value, 'baseFrequency')
                break;
        }
    });
});

function applySliderValue(filterId, val, attribute) {
    document.getElementById(filterId).setAttribute(attribute, val);
}

function map(val, minCurrent, maxCurrent, minTarget, maxTarget) {
    return minTarget + ((val - minCurrent) * (maxTarget - minTarget)) / (maxCurrent - minCurrent);
}




btn.addEventListener('click', function() {
    if (this.getAttribute('data-playing') === "true") {
        this.setAttribute('data-playing', "false");
        swapIcon();
    } else {
        this.setAttribute('data-playing', "true");
        swapIcon();
    }
});

function swapIcon() {
    document.querySelector('.play').classList.toggle('is-hidden');
    document.querySelector('.pause').classList.toggle('is-hidden');
}
