"use strict";

const matrix = document.getElementById('matrix');
const sliders = document.querySelectorAll('input[type="range"]');

// Animate Filter
let i = 1;
function animate() {
    matrix.setAttribute('values', i);
    i++;
    window.requestAnimationFrame(animate);
}

// if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//     animate();
// }

animate();


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



const btn = document.getElementById('playBtn');
btn.addEventListener('click', function() {

});
