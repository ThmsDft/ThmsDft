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

setInterval(function () {
  lines.forEach((line) => {
    const second = Math.random() * (1500 - 0) + 0;
    line.style.transitionDelay = `${second}ms`;
    line.classList.toggle("bounce");
    console.log('test')
  })
}, 2500);

