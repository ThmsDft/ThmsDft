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

const bubles = document.querySelectorAll("section.skills div");

console.log(bubles)

setInterval(function () {
  bubles.forEach((buble) => {
    const second = Math.random() * (1500 - 0) + 0;
    const scale = Math.random() * (1.1 - 1) + 1;
    const x = Math.random() * (15 - (-15)) + (-15);
    const y = Math.random() * (15 - (-15)) + (-15);
    buble.style.transitionDelay = `${second}ms`;
    buble.style.scale = scale
    buble.style.transform = `translate(${x}%, ${y}%)`
    buble.classList.toggle("levitation");
  });
}, 2000);


linesAnitmation(lines);


