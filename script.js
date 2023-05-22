// Getting variables
const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
previousNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth(); // getMonth() returns the month (0 to 11 of a date)

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
  let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // getting last date of the month
  let liTag = "";

  for (let i = 1; i <= lastDateOfMonth; i++) {
    liTag += `<li>${i}</li>`
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
}

renderCalendar();

previousNextIcon.forEach(icon => {
  icon.addEventListener("click", () => { // adding click event on both icons
    // if previous icon is clicked then decrease current month by 1, else increase it by 1 
    currentMonth = icon.id === "previous" ? currentMonth - 1 : currentMonth + 1;
  })
});