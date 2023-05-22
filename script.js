// Getting variables
const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days");

// getting new date, current year and month
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth(); // getMonth() returns the month (0 to 11 of a date)

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
  let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // getting last date of the month
  
  for (let i = 1; i <= lastDateOfMonth; i++) {
    console.log(i);
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`
}

renderCalendar();