const loadData = async () => {
  try {
    const url = "skills.json";
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

function random(){
 return `^${Math.floor(Math.random() * 800)}`;
}

var typed = new Typed('section.hero h1 span', {
  strings: [`T${random()}h${random()}o${random()}ma${random()}s ${random()} Du${random()}fo${random()}urt`, `a w${random()}eb ${random()} d${random()}ev${random()}e${random()}lope${random()}r`, `a web ${random()} d${random()}esi${random()}gn${random()}er`],
  typeSpeed: 90,
  backSpeed: 90,
  loop: true,
  startDelay: 30,
  backDelay: 1000,
  smartBackspace: true,
});

const skills = loadData();

const thms = document.querySelector("header nav ul li:first-child");

var isDarkTheme = false;

thms.addEventListener("click", () => {
  console.log(isDarkTheme);
  const bgColor = isDarkTheme ? "white" : "#001d16";
  const textColor = isDarkTheme ? "#001d16" : "white";
  document.documentElement.style.setProperty("--bg-color", bgColor);
  document.documentElement.style.setProperty("--text-color", textColor);
  isDarkTheme = isDarkTheme ? false : true;
});

const hamburger = document.querySelector(".hamburger");
const navInfo = document.querySelector("nav div.info");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navInfo.classList.toggle("active");
});

navInfo.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navInfo.classList.toggle("active");
});

const SkillInfo = document.querySelector("section.skills div.skillInfo");
const info = document.querySelector("section.skills div.skillInfo div.card");
const skillsButtons = document.querySelectorAll("section.skills button img");

skillsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    SkillInfo.classList.toggle("active");
    info.classList.toggle("active");
    console.log(button.alt);
    skills.then((skills) => {
      for (const skill of skills) {
        if (skill.name === button.alt) {
          info.innerHTML = `<h2>${skill.name}</h2>
          <p>${skill.description}</p>`;
        }
      }
    });
  });
});

SkillInfo.addEventListener("click", () => {
  SkillInfo.classList.toggle("active");
  info.classList.toggle("active");
});

const tomHead = document.querySelector("section.hero img");
const tomHeadFooter = document.querySelector("section.touch > img");

tomHead.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 50,
    origin: { y: 0, x: 0.5 },
    angle: -90,
  });
});

tomHeadFooter.addEventListener("click", () => {
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

linesAnitmation(lines);

const bubbles = document.querySelectorAll("section.skills button");

setInterval(function () {
  bubbles.forEach((bubble) => {
    const second = Math.random() * (1500 - 0) + 0;
    const scale = Math.random() * (1 - 0.5) + 0.5;
    const x = Math.random() * (15 - -15) + -15;
    const y = Math.random() * (15 - -15) + -15;
    bubble.style.transitionDelay = `${second}ms`;
    bubble.style.scale = scale;
    bubble.style.transform = `translate(${x}%, ${y}%)`;
  });
}, 3000);

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
    const messageClass = message.classList.contains("left")
      ? "slide-right"
      : "slide-left";
    if (revealTop < windowHeight - revealPoint) {
      message.classList.add(messageClass);
    } else {
      message.classList.remove(messageClass);
    }
  }
}

window.addEventListener("scroll", scrollReveal);

const leftHand = document.querySelector(
  "section.touch div.container img:nth-child(1)"
);
const rightHand = document.querySelector(
  "section.touch div.container img:nth-child(4)"
);

const touchHeading = document.querySelectorAll(
  "section.touch div.container h2"
);

window.addEventListener("scroll", function () {
  const windowHeight =
    window.innerHeight - leftHand.getBoundingClientRect().bottom * 0.3;
  const position =
    leftHand.getBoundingClientRect().bottom - window.innerHeight * 0.6;

  const calculPourcentage = (position * 100) / windowHeight;
  const pourcentage =
    calculPourcentage > 100
      ? 100
      : calculPourcentage < 0
      ? 0
      : calculPourcentage;

  leftHand.style.transform = `translateX(-${pourcentage}%)`;
  rightHand.style.transform = `translateX(${pourcentage}%)`;
});
