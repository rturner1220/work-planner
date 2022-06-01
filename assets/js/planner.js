// current day is displayed on top of planner
function headerDay() {
  var headerDay = moment().format('dddd, MMM Do');
  $("#currentDay").text(headerDay);
}
headerDay();

// present with time blocks and view the time block for that day

var myHours = [
    {
    id: '0',
    hour : '09',
    time: '09',
    cenit: 'AM',
    reminder: '',
    },
    {
    id: '1',
    hour : '10',
    time: '10',
    cenit: 'AM',
    reminder: '',
    },
    {
    id: '2',
    hour : '11',
    time: '11',
    cenit: 'AM',
    reminder: '',
    },
    {
      id: '3',
      hour : '12',
      time: '12',
      cenit: 'PM',
      reminder: '',
    },
    {
      id: '4',
      hour : '1',
      time: '13',
      cenit: 'PM',
      reminder: '',
    },
    {
      id: '5',
      hour : '2',
      time: '14',
      cenit: 'PM',
      reminder: '',
    },
    {
      id: '6',
      hour : '3',
      time: '15',
      cenit: 'PM',
      reminder: '',
    },
    {
      id: '7',
      hour : '4',
      time: '16',
      cenit: 'PM',
      reminder: '',
    },
    {
      id: '8',
      hour : '5',
      time: '17',
      cenit: 'PM',
      reminder: '',
    },
];
   
// creates time block
function buildTimeBlock(thisHour) {
  var timeBlock = $('<form>').attr({
    'class': 'row',
    'data-index': thisHour.id,
  });

  timeBlock.append(buildHourBlock(thisHour), buildHourPlan(thisHour), buildSavePlan());
    return timeBlock;  
}

function buildHourBlock(thisHour) {
  var hourBlock = $('<div>')
  .text(`${thisHour.hour}${thisHour.cenit}`)
  .attr({
    'class': 'col-md-2 hour',
  });

    return hourBlock;
}
   
// create schedule data
function buildPlanData(thisHour) {
  var now = moment();
  var planData = $('<textarea>');
   planData.attr('id', thisHour.id);

  // time block is color-coded in past, present, or future
   if (thisHour.time < now.format('HH')) {
     planData.attr ({
       'class': 'past',
     });

   } else if (thisHour.time === now.format('HH')) {
     planData.attr ({
       'class': 'present',
     });
   } else if (thisHour.time > now.format('HH')) {
     planData.attr({
       'class': 'future'
     });
    }

    return planData;
}

function buildHourPlan(thisHour) {
  var hourPlan = $("<div>")
  .attr({
    'class': 'col-md-9 description p-0',
  });

  hourPlan.append(buildPlanData(thisHour));

    return hourPlan;
}

function buildSavePlan() {
  var saveButton = $('<i class=\'far fa-save fa-lg\'></i>');
  var savePlan = $('<button>')
  .attr({
    'class': 'col-md-1 saveBtn',
  });
  savePlan.append(saveButton);

    return savePlan;
}

// text for the event is saved in local storage
function saveReminders() {
  localStorage.setItem("myHours", JSON.stringify(myHours));
}
  
// sets data in localstorage
function displayReminders() {
  myHours.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.reminder);
    });
  }

// sets existing local storage data to the view if it exists 
    function start() {
    var storedDay = JSON.parse(localStorage.getItem('myHours'));
    
    if (storedDay) {
      myHours = storedDay;
    }

    saveReminders();
    displayReminders();
  }

  myHours.forEach(function (thisHour) {
    $('.container').append(buildTimeBlock(thisHour));

    start();
  });

// save data in localstorage
  $('.saveBtn').on('click', function(event) {
    event.preventDefault();

    var row = $(this).closest('.row');
    var saveIndex = row.data('index');
    myHours[saveIndex].reminder = row.find('textarea').val();

    console.log(saveIndex);
    saveReminders();
    displayReminders();
});   

  
