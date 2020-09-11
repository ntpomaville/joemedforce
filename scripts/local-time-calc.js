//Define timezone offset for local time
let d = new Date();
let n = d.getTimezoneOffset();
let timeZoneHoursOffset = n / 60;

//Determine local time for 6pm GMT
let weekday = 6 - timeZoneHoursOffset;
let weekdayAmPm = "pm";
if (weekday < 1) {
    weekday = weekday + 12;
    weekdayAmPm = "am";
}
if (weekday > 12) {
    weekday = weekday -12;
    weekdayAmPm = "am";
}

let weekdayTime = weekday + weekdayAmPm;

//Determine local time for 11am GMT
let weekend = 11 - timeZoneHoursOffset;
let weekendAmPm = "am";
if (weekend < 1) {
    weekend = weekend + 12;
    weekendAmPm = "pm";
}
if (weekend > 12) {
    weekend = weekend -12;
    weekendAmPm = "pm";
}

let weekendTime = weekend + weekendAmPm;

//Set times on calendar.html
document.getElementById("wednesday-schedule").innerHTML = 'Wednesday ' + weekdayTime;
document.getElementById("friday-schedule").innerHTML = 'Friday ' + weekdayTime;
document.getElementById("saturday-schedule").innerHTML = 'Saturday ' + weekendTime;
document.getElementById("times-note").innerHTML = '(All times listed for your local timezone)'