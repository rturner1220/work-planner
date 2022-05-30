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
    cenit: "am",
    reminder: ""
  },
  {
  id: "0",
  hour : "09",
  time: "09",
  cenit: "am",
  reminder: ""
  },
  {
    id: "1",
    hour : "10",
    time: "10",
    cenit: "am",
    reminder: ""
    },
    {
    id: "2",
    hour : "11",
    time: "11",
    cenit: "am",
    reminder: ""
    },
  ]

 myHours.forEach(function(thisHour) {
   // creates timeblocks row
   var timeblocks = $("<form>").attr({
     "class": "row"
   });
      $(".container").append(timeblocks);

   // creates time field
   var hourBlock = $("<div>")
   .text(`${thisHour.hour}${thisHour.cenit}`)
   .attr({
     "class": "col-md-2 hour"
   });
   
   var hourplanner = $("<div>")
   .attr({
     "class": "col-md-9 description p-0"
   });

   var planData = $("<textarea>");
   hourplanner.append(planData);
   planData.attr("id", thisHour.id);
   if (thisHour.time < moment().format("HH")) {
     planData.attr ({
       "class": "past",
     })
   } else if (thisHour.time === moment().format("HH")) {
     planData.attr ({
       "class": "present"
     })
   } else if (thisHour.time > moment().format("HH")) {
     planData.attr({
       "class": "future"
     })
    }

    // create save button
   var saveBtn = $("<i class='far fa-save fa-lg'></i>")
   var savePlanner = $("<button>")
   .attr({
     "class": "col-md-1 saveBtn"
   });

   savePlanner.append(saveBtn);
   timeblocks.append(hourBlock, hourplanner, savePlanner);
 })