
import './styles/styles.scss';
import './styles/1.squash-and-stretch.scss';
import './styles/2.anticipation.scss';
import './styles/3.staging.scss';
import './styles/4.slow-in-out.scss';
import './styles/5.straight-ahead.scss';
import './styles/6.overlapping-action.scss';
import './styles/7.appeal.scss';
import "./impress";

impress().init();

let slides = impress();
slides.init();


document.querySelector('.next-slide').addEventListener('click', function (e) {
  setTimeout(() => {
    slides.next();
  }, 200);
});

document.querySelector('.prev-slide').addEventListener('click', function (e) {
  setTimeout(() => {
    slides.prev();
  }, 200);
});


document.querySelector('.display-next-onclick').addEventListener('click', function (e) {
  document.querySelector('li:not(.show)').classList.add('show');
});

document.querySelector('.illusion-of-life-book').addEventListener('click', function (e) {
  document.querySelector('img.meme:not(.show)').classList.add('show');
});

let animateClass = 'animate';
let animatingBox = '.animating-box'


//START - SQUASH AND STRETCH
let squashStretchBox = `.section-squash-and-stretch ${animatingBox}`;
document.getElementById('play_squashAndStretch').addEventListener('click', function (e) {
  document.querySelector(squashStretchBox).classList.add(animateClass);
});
document.getElementById('stop_squashAndStretch').addEventListener('click', function (e) {
  document.querySelector(squashStretchBox).classList.remove(animateClass);
});
//END - SQUASH AND STRETCH


//START - ANTICIPATION
let anticipationBox = `.section-anticipation ${animatingBox}`;
document.getElementById('play_anticipation').addEventListener('click', function (e) {
  document.querySelector(anticipationBox).classList.add(animateClass);
});
document.getElementById('stop_anticipation').addEventListener('click', function (e) {
  document.querySelector(anticipationBox).classList.remove(animateClass);
});
//END - ANTICIPATION


//START - STAGING
let stagingBox = `.section-staging ${animatingBox}`;
let randomBox = 1;
let blur = 'blur';
document.getElementById('play_staging').addEventListener('click', function (e) {
  let animatingBoxes = document.querySelectorAll(stagingBox);
  randomBox = Math.ceil(Math.random() * 6);
  animatingBoxes.forEach((element, index) => {
    element.classList.add(blur);
    if ((index + 1) === randomBox) {
      element.classList.add(animateClass);
    }
  });
});
document.getElementById('stop_staging').addEventListener('click', function (e) {
  let animatingBoxes = document.querySelectorAll(stagingBox);
  animatingBoxes.forEach((element) => {
    element.classList.remove(blur);
    element.classList.remove(animateClass);
  });
});
//END - STAGING


//START - SLOW-IN-OUT
let slowInOutBox = `.section-slowInOut ${animatingBox}`;
document.getElementById('play_slowInOut').addEventListener('click', function (e) {
  document.querySelectorAll(slowInOutBox).forEach(function (val) {
    val.classList.add(animateClass);
  });
});
document.getElementById('stop_slowInOut').addEventListener('click', function (e) {
  document.querySelector('.section-slowInOut .animating-box').classList.remove(animateClass);
  document.querySelectorAll(slowInOutBox).forEach(function (val) {
    val.classList.remove(animateClass);
  });
});
document.querySelector('.section-slowInOut .custom-styles').addEventListener('blur', function (e) {
  // update custom timing function
  document.querySelector('.section-slowInOut .custom-timing .animating-box').style.animationTimingFunction = e.target.firstElementChild.innerText;
});
//END - SLOW-IN-OUT


//START - FOLLOW THROUGH
// fill
let draggable = document.querySelector('.section-followThrough .animation-container .draggable');
let empties = document.querySelectorAll('.section-followThrough .animation-container .empty');

draggable.addEventListener('dragstart', dragStart);
draggable.addEventListener('dragend', dragEnd);

function dragStart(e) {
  this.className += ' hold';
  setTimeout(() => {
    this.className = 'invisible'
  }, 0);
}

function dragEnd(e) {
  this.className = 'draggable';
}

for(let empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave(e) {  
  this.className = "empty"; 
}

function dragDrop(e) {
  this.className = "empty";
  this.append(draggable);
}
/////////////////////////////

// var card = document.querySelector('.section-followThrough .animating-box.overlapping-action');
// document.querySelector('.section-followThrough .animating-box.overlapping-action').addEventListener('mousedown', function (e) {

//   // Sigmoid function
//   var sigmoid = function(x) {
//     return (x / (1 + Math.abs(x)));
//   };

//   // Stores X and Y coordinates of Mouse
//   var MousePosition = {
//     x: 0,
//     y: 0
//   };

//   // Stores X and Y Coordinates of the Card
//   var CardPosition = {
//     x: 0,
//     y: 0
//   };

//   var xVelocity = 0;
//   var rotation = 0;

//   var update = function() {
//     xVelocity = (MousePosition.x - CardPosition.x);

//     CardPosition.x = MousePosition.x;
//     CardPosition.y = MousePosition.y;

//   rotation = rotation * 0.9 + (sigmoid(xVelocity) * 1.5);

//     // Update the position of card
//     card.style.top = CardPosition.y + 'px';
//     // Subtract (Width of card / 2 = 125) to centre cursor on top
//     card.style.left = (CardPosition.x - 125) + 'px';

//     if (Math.abs(rotation) < 0.01) rotation = 0;

//     card.style.transform = `rotate(${rotation}deg)`;

//     requestAnimationFrame(update); 
//   };
//   update();


//   document.querySelector('.section-followThrough .animating-box.overlapping-action').addEventListener('mousemove', function (e) {
//     update();

//     MousePosition.x = e.clientX;
//     MousePosition.y = e.clientY;

//   });


// });

//END - FOLLOW THROUGH

//START - ARC
document.getElementById('play_arc').addEventListener('click', function (e) {
  document.querySelector('.section-arc .animating-box').classList.add(animateClass);
});
document.getElementById('stop_arc').addEventListener('click', function (e) {
  document.querySelector('.section-arc .animating-box').classList.remove(animateClass);
});
// END - ARC

