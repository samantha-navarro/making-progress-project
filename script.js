// get all id and save into a variable
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// get all class of circle
const circle = document.querySelectorAll('.circle');

let currentActive = 1;

// adding an event listener to next button
next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// function for next button to move to next number
function update() {
  circle.forEach((circles, index) => {
    if (index < currentActive) {
      circles.classList.add('active');
    } else {
      circles.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + '%';

  // disabling buttons when it reaches it's length

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circle.length) {
    next.disabled = true;
  } else {
    // both buttons not be disabled when it hasn't reached it's length
    prev.disabled = false;
    next.disabled = false;
  }
}
