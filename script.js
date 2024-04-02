// region GettingDate
const now = new Date();
const year = now.getFullYear()
const month = now.getMonth();
const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
const day2 = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
let dayOfWeek;
let monthOfYear;
if(day ===1){
    dayOfWeek = "Monday";
}
if(day ===2){
    dayOfWeek = "Tuesday";
}
if(day ===3){
    dayOfWeek = "Wednesday";
}
if(day ===4){
    dayOfWeek = "Thursday";
}
if(day ===5){
    dayOfWeek = "Friday";
}
if(day ===6){
    dayOfWeek = "Saturday";
}
if(day ===0){
    dayOfWeek = "Sunday";
}
if(month === 1){
    monthOfYear ="February";
}
if(month === 2){
    monthOfYear ="March";
}
if(month === 3){
    monthOfYear ="April";
}
if(month === 4){
    monthOfYear ="May";
}
if(month === 5){
    monthOfYear ="June";

}if(month === 6){
    monthOfYear ="July";
}if(month === 7){
    monthOfYear ="August";
}if(month === 8){
    monthOfYear ="September";
}if(month === 9){
    monthOfYear ="October";
}
if(month === 10){
    monthOfYear ="November";
}
if(month === 11){
    monthOfYear ="December";
}
if(month === 0){
    monthOfYear ="January";
}
console.log(`Today is ${dayOfWeek} the ${day2}, ${monthOfYear} ${year} and the time is ${hours}:${minutes}.`);
//endregion
//region updatingCalendar
const currentDate = now.getDate();

// Update the calendar based on the current date
window.onload = function() {
    const calendarTable = document.getElementById('calendarTable');
    const cells = calendarTable.getElementsByTagName('td');

    for (let i = 0; i < cells.length; i++) {
        const cellDate = parseInt(cells[i].textContent);
        if (!isNaN(cellDate)) {
            if (cellDate < currentDate) {
                cells[i].className = 'past';
            } else if (cellDate === currentDate) {
                cells[i].className = 'today';
            } else {
                cells[i].className = 'available';
            }
        }
    }
};
//endregion
//region ordering

//endregion