const menubar = document.querySelector("#menu");
const Navbar = document.querySelector(".navbar");
menubar.onclick = () => {
  menubar.classList.toggle("bx-x");
  Navbar.classList.toggle("active");
};
const section = document.querySelectorAll("section");
const navlink = document.querySelectorAll("header nav a");
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top > offset && top < offset + height) {
      sec.classList.add("start-animation");
      navlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  Navbar.classList.remove("active");
};
// Linear Progress Bar
// const progressBars = document.querySelectorAll(".progress");
const progressBars = document.querySelectorAll(".progress-bar-h");
const progressTexts = document.querySelectorAll(".val");

progressBars.forEach((progressBar, index) => {
  let progressValue = 0;
  const targetValue = parseInt(progressBar.getAttribute("data-target")) || 100;

  const progressInterval = setInterval(() => {
    progressValue++;
    progressBar.style.width = `${progressValue}%`;
    progressTexts[index].textContent = `${progressValue}%`;

    if (progressValue >= targetValue) {
      clearInterval(progressInterval);
    }
  }, 50);
});

// Circular Progress Bar
const circularProgressBars = document.querySelectorAll(
  ".circular-progress circle"
);
const circularNumbers = document.querySelectorAll(".number");

circularProgressBars.forEach((circularProgress, index) => {
  let circularValue = 0;
  const targetValue =
    parseInt(circularNumbers[index].getAttribute("data-target")) || 100;

  const circularInterval = setInterval(() => {
    circularValue++;
    circularNumbers[index].textContent = `${circularValue}%`;
    circularProgress.style.strokeDashoffset = 440 - (440 * circularValue) / 100;

    if (circularValue >= targetValue) {
      clearInterval(circularInterval);
    }
  }, 50);
});


const selectTyped = document.querySelector('.typed');
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 2000
  });
}