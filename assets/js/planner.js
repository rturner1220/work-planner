var workPlanner = {};

// current day is displayed on top of planner
// First we use the Date function, and then we process it into year, month and day, 
//and display it in the way we want.
var d = new Date()
var year = d.getFullYear()
var month = d.getMonth()+1;
var day = d.getDate()

var totalDays = new Date(year, month, 0).getDate()
var printOut =
(month<10 ? '0' : '') + month + '/' + 
(day<10 ? '0' : '') + day + '/' + year
$('.date').text(`${printOut}`)

// present with time blocks and view the time block for that day


// open the planner




    

// past, present and future separed by colors


// click into a time block and enter and event


// click to save button and save in local storage


