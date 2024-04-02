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
function Calculate() {
    // Get selected batter type
    const batter = document.querySelector('input[name="Batter"]:checked').value;

    // Get selected size
    const size = parseInt(document.querySelector('input[name="size"]:checked').value);

    // Calculate base cost based on size
    let baseCost = size * 10;

    // Additional cost for gluten-free batter
    if (batter === "Gluten-free") {
        baseCost += 5;
    }

    // Get primary and secondary frosting colors
    const primaryColor = document.getElementById("PrimaryColor").value;
    const secondaryColor = document.getElementById("SecondaryColor").value;

    // Additional cost for extra frosting colors
    let frostingCost = 5; //frosting cost
    if (secondaryColor !== "") {
        frostingCost += 5; // Assuming additional $5 for each additional frosting color
    }

    // Get delivery type
    let deliveryType = document.getElementById("container").value;

    // Additional cost for delivery
    let deliveryCost = 0; // Initialize delivery cost
    if (deliveryType === "delivery") {
        deliveryCost += 30; // Assuming $10 delivery fee
    }

    // Calculate total cost
    let totalCost = baseCost + frostingCost + deliveryCost;

    // Display the total cost to the user
    alert("Total Cost: $" + totalCost);
}
//endregion