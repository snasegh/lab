const container = document.querySelector(".breathe-container");
const text = document.querySelector("#text");
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const date = new Date();

breatheAnimation();

function findNextYogaPractice(nextMonday, nextThursday) {
  const now = Date.now();
  const months = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  if (nextMonday - now < nextThursday - now) {
    //I can move all the consts in this if up, now I have unused declarations in both functions.
    const monthIndex = nextMonday.getMonth();
    const monthName = months[monthIndex];
    const dateForNextMonday = nextMonday.getDate();
    const dateForNextThursday = nextThursday.getDate();
    const yogaPracticeInfo = document.getElementById("nextYogaClass");

    yogaPracticeInfo.innerHTML = `
        <p>Mandag ${dateForNextMonday}. ${monthName} kl. 07:00</p>
        <small>Hjerteveien 4, 3517 Hønefoss</small>
        `;
  } else {
    const monthIndex = nextThursday.getMonth();
    const monthName = months[monthIndex];
    const dateForNextMonday = nextMonday.getDate();
    const dateForNextThursday = nextThursday.getDate();
    const yogaPracticeInfo = document.getElementById("nextYogaClass");
    yogaPracticeInfo.innerHTML = `
        <p>Torsdag ${dateForNextThursday}. ${monthName} kl. 07:00</p>
        <small>Hjerteveien 4, 3517 Hønefoss</small>
        `;
  }
}

// If I were to do this again, I would merge findNextMonday and findNextThursday into 1 function.

const findNextMonday = (date, day_in_week) => {
  const nextMonday = new Date(date || new Date());
  nextMonday.setDate(
    nextMonday.getDate() + ((day_in_week - 1 - nextMonday.getDay() + 7) % 7) + 1
  );
  return nextMonday;
};

const findNextThursday = (date, day_in_week) => {
  const nextThursday = new Date(date || new Date());
  nextThursday.setDate(
    nextThursday.getDate() +
      ((day_in_week - 1 - nextThursday.getDay() + 7) % 7) +
      1
  );
  return nextThursday;
};

findNextYogaPractice(findNextMonday(date, 1), findNextThursday(date, 4));

function breatheAnimation() {
  text.innerHTML = "Pust inn";
  container.className = "breathe-container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Pust ut";
      container.className = "breathe-container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);

function openForm(event) {
  const signupForm = document.getElementById("signup-form");
  event = window.event;
  event.preventDefault();
  signupForm.style.display = "flex";
  signupForm.classList.add("appear");
}
