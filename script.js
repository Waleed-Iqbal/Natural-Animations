

let animateClass = 'animate';
let animatingBox = '.animating-box'

let squashStretchBox = `$.section-squash-and-stretch ${animatingBox}`;
function play_squashAndStretch(e) {
  document.querySelector(squashStretchBox).classList.add(animateClass);
}
function stop_squashAndStretch(e) {
  document.querySelector(squashStretchBox).classList.remove(animateClass);
}


let anticipationBox = `.section-anticipation ${animatingBox}`;
function play_anticipation(e) {
  document.querySelector(anticipationBox).classList.add(animateClass);
}
function stop_anticipation(e) {
  document.querySelector(anticipationBox).classList.remove(animateClass);
}


let stagingBox = `.section-staging ${animatingBox}`;
let randomBox = 1;
let blur = 'blur';
function play_staging(e) {
  let animatingBoxes = document.querySelectorAll(stagingBox);
  randomBox = Math.ceil(Math.random() * 6);
  animatingBoxes.forEach((element, index) => {
    element.classList.add(blur);
    if ((index+1) === randomBox) {
      element.classList.add(animateClass);
    }

  });
}
function stop_staging(e) {
  let animatingBoxes = document.querySelectorAll(stagingBox);
  animatingBoxes.forEach((element) => {
    element.classList.remove(blur);
    element.classList.remove(animateClass);
  });
}


let straightAheadBox = `.section-straight-ahead ${animatingBox}`;
function play_straightAhead(e) {
  document.querySelector(straightAheadBox).classList.add(animateClass);
}
function stop_straightAhead(e) {
  document.querySelector(straightAheadBox).classList.remove(animateClass);
}



function play_followThrough(e) {
  document.querySelector('.section-follow-through .animating-box').classList.add(animateClass);
}

function stop_followThrough(e) {
  document.querySelector('.section-follow-through .animating-box').classList.remove(animateClass);
}

function play_slowInOut(e) {
  document.querySelector('.section-slow-in-out .animating-box').classList.add(animateClass);
}

function stop_slowInOut(e) {
  document.querySelector('.section-slow-in-out .animating-box').classList.remove(animateClass);
}

function play_arc(e) {
  document.querySelector('.section-arc .animating-box').classList.add(animateClass);
}

function stop_arc(e) {
  document.querySelector('.section-arc .animating-box').classList.remove(animateClass);
}


function play_secondaryAction(e) {
  document.querySelector('.section-secondary-action .animating-box').classList.add(animateClass);
}

function stop_secondaryAction(e) {
  document.querySelector('.section-secondary-action .animating-box').classList.remove(animateClass);
}



function play_timing(e) {
  document.querySelector('.section-timing .animating-box').classList.add(animateClass);
}

function stop_timing(e) {
  document.querySelector('.section-timing .animating-box').classList.remove(animateClass);
}

function play_exaggeration(e) {
  document.querySelector('.section-exaggeration .animating-box').classList.add(animateClass);
}

function stop_exaggeration(e) {
  document.querySelector('.section-exaggeration .animating-box').classList.remove(animateClass);
}

function play_solidDrawing(e) {
  document.querySelector('.section-solid-drawing .animating-box').classList.add(animateClass);
}

function stop_solidDrawing(e) {
  document.querySelector('.section-solid-drawing .animating-box').classList.remove(animateClass);
}

function play_Appeal(e) {
  document.querySelector('.section-appeal .animating-box').classList.add(animateClass);
}

function stop_Appeal(e) {
  document.querySelector('.section-appeal .animating-box').classList.remove(animateClass);
}
