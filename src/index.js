
import './styles/styles.scss';
import './styles/1.squash-and-stretch.scss';
import './styles/2.anticipation.scss';
import './styles/3.staging.scss';

let animateClass = 'animate';
let animatingBox = '.animating-box'

 // SQUASH AND STRETCH
let squashStretchBox = `.section-squash-and-stretch ${animatingBox}`;
document.getElementById('play_squashAndStretch').addEventListener('click', function(e) {
  document.querySelector(squashStretchBox).classList.add(animateClass);
});
document.getElementById('stop_squashAndStretch').addEventListener('click', function(e) {
  document.querySelector(squashStretchBox).classList.remove(animateClass);
});


let anticipationBox = `.section-anticipation ${animatingBox}`;
document.getElementById('play_anticipation').addEventListener('click', function(e) {
  document.querySelector(anticipationBox).classList.add(animateClass);
});
document.getElementById('stop_anticipation').addEventListener('click', function(e) {
  document.querySelector(anticipationBox).classList.remove(animateClass);
});

// STAGING
let stagingBox = `.section-staging ${animatingBox}`;
let randomBox = 1;
let blur = 'blur';
document.getElementById('play_staging').addEventListener('click', function(e) {
  let animatingBoxes = document.querySelectorAll(stagingBox);
  randomBox = Math.ceil(Math.random() * 6);
  animatingBoxes.forEach((element, index) => {
    element.classList.add(blur);
    if ((index+1) === randomBox) {
      element.classList.add(animateClass);
    }
  });
});
document.getElementById('stop_staging').addEventListener('click', function(e) {
  let animatingBoxes = document.querySelectorAll(stagingBox);
  animatingBoxes.forEach((element) => {
    element.classList.remove(blur);
    element.classList.remove(animateClass);
  });
});

// STRAIGHT AHEAD
let straightAheadBox = `.section-straightAhead ${animatingBox}`;
document.getElementById('play_straightAhead').addEventListener('click', function(e) {
  document.querySelector(straightAheadBox).classList.add(animateClass);
});
document.getElementById('stop_straightAhead').addEventListener('click', function(e) {
  document.querySelector(straightAheadBox).classList.remove(animateClass);
});


// FOLLOW THROUGH
document.getElementById('play_followThrough').addEventListener('click', function(e) {
  document.querySelector('.section-followThrough .animating-box').classList.add(animateClass);
});
document.getElementById('stop_followThrough').addEventListener('click', function(e) {
  document.querySelector('.section-followThrough .animating-box').classList.remove(animateClass);
});

// SLOW-IN-OUT
document.getElementById('play_slowInOut').addEventListener('click', function(e) {
  document.querySelector('.section-slowInOut .animating-box').classList.add(animateClass);
});
document.getElementById('stop_slowInOut').addEventListener('click', function(e) {
  document.querySelector('.section-slowInOut .animating-box').classList.remove(animateClass);
});

// ARC
document.getElementById('play_arc').addEventListener('click', function(e) {
  document.querySelector('.section-arc .animating-box').classList.add(animateClass);
});
document.getElementById('stop_arc').addEventListener('click', function(e) {
  document.querySelector('.section-arc .animating-box').classList.remove(animateClass);
});

// SECONDARY ACTION
document.getElementById('play_secondaryAction').addEventListener('click', function(e) {
  document.querySelector('.section-secondaryAction .animating-box').classList.add(animateClass);
});
document.getElementById('stop_secondaryAction').addEventListener('click', function(e) {
  document.querySelector('.section-secondaryAction .animating-box').classList.remove(animateClass);
});


// TIMING
document.getElementById('play_timing').addEventListener('click', function(e) {
  document.querySelector('.section-timing .animating-box').classList.add(animateClass);
});
document.getElementById('stop_timing').addEventListener('click', function(e) {
  document.querySelector('.section-timing .animating-box').classList.remove(animateClass);
});

// EXAGGERATION
document.getElementById('play_exaggeration').addEventListener('click', function(e) {
  document.querySelector('.section-exaggeration .animating-box').classList.add(animateClass);
});
document.getElementById('stop_exaggeration').addEventListener('click', function(e) {
  document.querySelector('.section-exaggeration .animating-box').classList.remove(animateClass);
});


// SOLID DRAWING
document.getElementById('play_solidDrawing').addEventListener('click', function(e) {
  document.querySelector('.section-solidDrawing .animating-box').classList.add(animateClass);
});
document.getElementById('stop_solidDrawing').addEventListener('click', function(e) {
  document.querySelector('.section-solidDrawing .animating-box').classList.remove(animateClass);
});

// APPEAL
document.getElementById('play_appeal').addEventListener('click', function(e) {
  document.querySelector('.section-appeal .animating-box').classList.add(animateClass);
});
document.getElementById('stop_appeal').addEventListener('click', function(e) {
  document.querySelector('.section-appeal .animating-box').classList.remove(animateClass);
});
