"use strict";

const address ="email@joemccarthy.dev";
const clipBtn = document.getElementById('clipBtn');

clipBtn.addEventListener('click', () => {
     navigator.clipboard.writeText(address).then(()=>{
         showFeedback('clipSuccess');
     }, ()=> {
         showFeedback('clipFail');
     });
});

function showFeedback(feedbackId) {
    let feedback = document.getElementById(feedbackId);
    feedback.style.zIndex = 2;
    feedback.style.opacity = 1;

    let timeout = new Promise(resolve => {
        setTimeout(() => {
            feedback.style.opacity = 0;
            resolve();
        }, 2500);
    });
    timeout.then(() => {
        setTimeout(()=> feedback.style.zIndex = 0, 250);
    });
}
