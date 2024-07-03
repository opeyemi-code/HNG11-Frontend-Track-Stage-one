let dayOfTheWeek = document.getElementById("day-of-the-week");
const currentTime = document.getElementById("time");
let periodOfTheDay = document.getElementById("meridian");

function setDayOfTheWeek() {
  const date = new Date();
  let day;

  switch (date.getDay()) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednessday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Sunday";
      break;
  }

  dayOfTheWeek.textContent = day;
}
setDayOfTheWeek();

function setCurrentTime() {
  const date = new Date();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getSeconds();

  currentTime.textContent = `${hours.toString()}:${minutes.toString()}:${seconds
    .toString()
    .padStart(2, "0")}`;

  function setPeriodOfTheDay() {
    if (hours < 12) {
      periodOfTheDay.textContent = " am";
    } else {
      periodOfTheDay.textContent = " pm";
    }
  }

  setPeriodOfTheDay();
}

setInterval(setCurrentTime, 1000);
