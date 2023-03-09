// confetti({
//   particleCount: 100,
//   spread: 50,
//   origin: { y: 0.5, x: 0 },
//   angle: 45
// });

// confetti({
//   particleCount: 100,
//   spread: 50,
//   origin: { y: 0.5, x: 1 },
//   angle: 135
// });

const lines = document.querySelectorAll("section.hero div.container div span");

var time = 2000,
  intId;

function linesAnitmation(lines) {
  intId = setInterval(function () {
    lines.forEach((line) => {
      const second = Math.random() * (1500 - 0) + 0;
      line.style.transitionDelay = `${second}ms`;
      line.classList.toggle("bounce");
    });
    time = lines[0].classList.contains("bounce") ? 6000 : 2000; //some new value
    intId = window.clearInterval(intId);
    linesAnitmation(lines);
  }, time);
}

const bubbles = document.querySelectorAll("section.skills div");

setInterval(function () {
  bubbles.forEach((bubble) => {
    const second = Math.random() * (1500 - 0) + 0;
    const scale = Math.random() * (1.2 - 0.9) + 0.9;
    const x = Math.random() * (15 - (-15)) + (-15);
    const y = Math.random() * (15 - (-15)) + (-15);
    bubble.style.transitionDelay = `${second}ms`;
    bubble.style.scale = scale
    bubble.style.transform = `translate(${x}%, ${y}%)`
  });
}, 3000);


linesAnitmation(lines);


