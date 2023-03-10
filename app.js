const tomHead = document.querySelector("section.hero img");

tomHead.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 50,
    origin: { y: 1, x: 0.5 },
    angle: 90,
  });

  // confetti({
  //   particleCount: 100,
  //   spread: 50,
  //   origin: { y: 0.5, x: 0 },
  //   angle: 45,
  // });

  // confetti({
  //   particleCount: 100,
  //   spread: 50,
  //   origin: { y: 0.5, x: 1 },
  //   angle: 135,
  // });
});

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
    time = lines[0].classList.contains("bounce") ? 6000 : 2000;
    intId = window.clearInterval(intId);
    linesAnitmation(lines);
  }, time);
}

const bubbles = document.querySelectorAll("section.skills div");

setInterval(function () {
  bubbles.forEach((bubble) => {
    const second = Math.random() * (1500 - 0) + 0;
    const scale = Math.random() * (1.2 - 0.9) + 0.9;
    const x = Math.random() * (15 - -15) + -15;
    const y = Math.random() * (15 - -15) + -15;
    bubble.style.transitionDelay = `${second}ms`;
    bubble.style.scale = scale;
    bubble.style.transform = `translate(${x}%, ${y}%)`;
  });
}, 3000);

linesAnitmation(lines);

/* =========SCROLL REVEAL========= */

const leftMessages = document.querySelectorAll(
  "section.about div:nth-child(odd)"
);
const rigthMessages = document.querySelectorAll(
  "section.about div:nth-child(even)"
);

for (const leftMessage of leftMessages) {
  leftMessage.classList.add("left");
}

const messages = [...leftMessages, ...rigthMessages];

function scrollReveal() {
  const revealPoint = 10;

  for (const message of messages) {
    var windowHeight = window.innerHeight;
    var revealTop = message.getBoundingClientRect().top;
    const messageClass = message.classList.contains('left') ? 'slide-right' : 'slide-left'
    if (revealTop < windowHeight - revealPoint) {
      message.classList.add(messageClass);
    } else {
      message.classList.remove(messageClass);
    }
  }

  // for (var i = 0; i < revealElements.length; i++) {
  //   var windowHeight = window.innerHeight;
  //   var revealTop = revealElements[i].getBoundingClientRect().top;
  //   if (revealTop < windowHeight - revealPoint) {
  //     revealElement[i].classList.add("slide-right");
  //   } else {
  //     revealElement[i].classList.remove("slide-right");
  //   }
  // }
}

window.addEventListener("scroll", scrollReveal);
