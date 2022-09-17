//MOMENT.JS TO DISPLAY CURRENT DAY, CURRENT TIME, AND SET VARIABLE FOR CURRENT HOUR
const today = moment();
$('#currentDay').text(today.format('MMMM Do YYYY'));
$('#currentTime').text(today.format('h:mm a'))
let currentHour = today.format("HH");

//WHEN BUTTON IS CLICKED, SCHEDULE IS CLEARED
$('#clearFieldsBtn').click(function(event){
    event.preventDefault;
    $('textarea').val("");
    localStorage.clear();
})

//EACH TIME SLOT IS COMPARED TO CURRENT TIME AND COLOR PROPERTY IS SET
$('.time-slot').each(function(){
    let timeCheck = $(this).attr("id");

    if (currentHour === timeCheck) {
        $(this).addClass("present");
      } else if (currentHour < timeCheck) {
        $(this).removeClass("present")
        $(this).addClass("future");
      } else if (currentHour > timeCheck) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
});

//WHEN SAVE BUTTON IS CLICKED A LOCAL STORAGE ITEM IS CREATED FOR EACH 
// TIME SLOT CONTAINING HOUR OF DAY AND USER INPUT FROM TEXT AREA
$(".saveBtn").click(function (event) {
    event.preventDefault();
    let time = $(this).parent().attr("id")
    let value = $(this).siblings(".calendar-item").val();
    localStorage.setItem(time, value);
});

//CHECK LOCAL STORAGE
console.log(localStorage)

//WHEN PAGE IS REFRESHED, LOCAL STORAGE ITEMS ARE SET IN PLACE
// TO JQUERY PATH OF TEXT AREA
$("#07 .calendar-item").val(localStorage.getItem("07"));
$("#08 .calendar-item").val(localStorage.getItem("08"));
$("#09 .calendar-item").val(localStorage.getItem("09"));
$("#10 .calendar-item").val(localStorage.getItem("10"));
$("#11 .calendar-item").val(localStorage.getItem("11"));
$("#12 .calendar-item").val(localStorage.getItem("12"));
$("#13 .calendar-item").val(localStorage.getItem("13"));
$("#14 .calendar-item").val(localStorage.getItem("14"));
$("#15 .calendar-item").val(localStorage.getItem("15"))
$("#16 .calendar-item").val(localStorage.getItem("16"))
$("#17 .calendar-item").val(localStorage.getItem("17"))