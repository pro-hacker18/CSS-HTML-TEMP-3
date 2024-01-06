let toBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", function () {
  if (this.scrollY >= 574) {
    toBtn.classList.add("show");
  } else {
    toBtn.classList.remove("show");
  }
});

toBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// get nums pulsing
let nums = document.querySelectorAll(".stats .stats-container .stat p");
let section = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// get progress pulsing

let progressSpans = document.querySelectorAll(
  ".our-skills .container .skills-container .skill .progress span"
);

let progSection = document.querySelector(".our-skills");

window.addEventListener("scroll", function () {
  if (window.scrollY >= progSection.offsetTop + 50) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// count down timer
let countDownDat = new Date("Jan 16, 2024 00:00:01").getTime();

let counter = setInterval(() => {
  // get date now
  let dateNow = new Date().getTime();
  // find a deference  between time time now an from start time
  let dateDiff = countDownDat - dateNow;
  // get time unit
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
