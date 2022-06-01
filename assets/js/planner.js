// current day is displayed on top of planner
function headerDay() {
  var headerDay = moment().format('dddd, MMM Do');
  $("#currentDay").text(headerDay);
}
headerDay();

// present with time blocks and view the time block for that day

var myHours = [
    {
    id: "0",
    hour : "09",
    time: "09",
    cenit: "AM",
    reminder: ""
    },
    {
    id: "1",
    hour : "10",
    time: "10",
    cenit: "AM",
    reminder: ""
    },
    {
    id: "2",
    hour : "11",
    time: "11",
    cenit: "AM",
    reminder: ""
    },
    {
      id: "3",
      hour : "12",
      time: "12",
      cenit: "PM",
      reminder: ""
    },
    {
      id: "4",
      hour : "1",
      time: "1",
      cenit: "PM",
      reminder: ""
    },
    {
      id: "5",
      hour : "2",
      time: "2",
      cenit: "PM",
      reminder: ""
    },
    {
      id: "6",
      hour : "3",
      time: "3",
      cenit: "PM",
      reminder: ""
    },
    {
      id: "7",
      hour : "4",
      time: "4",
      cenit: "PM",
      reminder: ""
    },
    {
      id: "8",
      hour : "5",
      time: "5",
      cenit: "PM",
      reminder: ""
    },
]

 myHours.forEach(function(thisHour) {
   // creates time blocks row
   var timeBlocks = $("<form>").attr({
     "class": "row"
   });
      $(".container").append(timeBlocks);

   // creates time block
   var hourBlock = $("<div>")
   .text(`${thisHour.hour}${thisHour.cenit}`)
   .attr({
     "class": "col-md-2 hour"
   });
   
   // create schedule data
   var hourPlan = $("<div>")
   .attr({
     "class": "col-md-9 description p-0"
   });

   // time block is color-coded in past, present, or future
   var planData = $("<textarea>");
   hourPlan.append(planData);
   planData.attr("id", thisHour.id);
   if (thisHour.time < moment().format('HH')) {
     planData.attr ({
       "class": "past",
     })
   } else if (thisHour.time === moment().format('HH')) {
     planData.attr ({
       "class": "present"
     })
   } else if (thisHour.time > moment().format('HH')) {
     planData.attr({
       "class": "future"
     })
    }

    // text for the event is saved in local storage
    function saveReminders() {
      localStorage.setItem("myHours", JSON.stringify(myHours));
    }
  
  // sets data in localstorage
    function displayReminders() {
      myHours.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
      })
    }

  // sets existing local storage data to the view if it exists 
    function start() {
    var storedDay = JSON.parse(localStorage.getItem("myHours"));
    
    if (storedDay) {
      myHours = storedDay;
    }

    saveReminders();
    displayReminders();
  }
    start();

    // create save btn
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
    .attr({
      "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    timeBlocks.append(hourBlock, hourPlan, savePlan);
  })

  // save data in localstorage
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myHours[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})