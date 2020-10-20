//Define timezone offset for local time
let d = new Date();
let n = d.getTimezoneOffset();
let timeZoneHoursOffset = n / 60;


if (sunday == true) {
    let localSundayTime = sundayTime - timeZoneHoursOffset
    let localSundayDay = 'Sunday'
    let amPm = 'am'
    //Roll back to previous day if offset time is <1
    if (localSundayTime < 1) {
        localSundayTime = localSundayTime + 24
        localSundayDay = 'Saturday'
    }
    //Roll forward to next day if offset time is >24
    if (localSundayTime > 24) {
        localSundayTime = localSundayTime - 24
        localSundayDay = 'Monday'
    }
    //Switch from AM to PM if offset time >12
    if (localSundayTime > 12) {
        localSundayTime = localSundayTime - 12
        amPm = 'pm'
    }
    document.getElementById("sunday-schedule").innerHTML = localSundayDay + ' @' + localSundayTime + amPm;
}


if (monday == true) {
    let localMondayTime = mondayTime - timeZoneHoursOffset
    let localMondayDay = 'Monday'
    let amPm = 'am'
    //Roll back to previous day if offset time is <1
    if (localMondayTime < 1) {
        localMondayTime = localMondayTime + 24
        localMondayDay = 'Sunday'
    }
    //Roll forward to next day if offset time is >24
    if (localMondayTime > 24) {
        localMondayTime = localMondayTime - 24
        localMondayDay = 'Tuesday'
    }
    //Switch from AM to PM if offset time >12
    if (localMondayTime > 12) {
        localMondayTime = localMondayTime - 12
        amPm = 'pm'
    }
    document.getElementById("monday-schedule").innerHTML = localMondayDay + ' @' + localMondayTime + amPm;
}


if (tuesday == true) {
    let localTuesdayTime = tuesdayTime - timeZoneHoursOffset
    let localTuesdayDay = 'Tuesday'
    let amPm = 'am'
    //Roll back to previous day if offset time is <1
    if (localTuesdayTime < 1) {
        localTuesdayTime = localTuesdayTime + 24
        localTuesdayDay = 'Monday'
    }
    //Roll forward to next day if offset time is >24
    if (localTuesdayTime > 24) {
        localTuesdayTime = localTuesdayTime - 24
        localTuesdayDay = 'Wednesday'
    }
    //Switch from AM to PM if offset time >12
    if (localTuesdayTime > 12) {
        localTuesdayTime = localTuesdayTime - 12
        amPm = 'pm'
    }
    document.getElementById("tuesday-schedule").innerHTML = localTuesdayDay + ' @' + localTuesdayTime + amPm;
}


if (wednesday == true) {
    let localWednesdayTime = wednesdayTime - timeZoneHoursOffset
    let localWednesdayDay = 'Wednesday'
    let amPm = 'am'
    //Roll back to previous day if offset time is <1
    if (localWednesdayTime < 1) {
        localWednesdayTime = localWednesdayTime + 24
        localWednesdayDay = 'Tuesday'
    }
    //Roll forward to next day if offset time is >24
    if (localWednesdayTime > 24) {
        localWednesdayTime = localWednesdayTime - 24
        localWednesdayDay = 'Thursday'
    }
    //Switch from AM to PM if offset time >12
    if (localWednesdayTime > 12) {
        localWednesdayTime = localWednesdayTime - 12
        amPm = 'pm'
    }
    document.getElementById("wednesday-schedule").innerHTML = localWednesdayDay + ' @' + localWednesdayTime + amPm;
}


if (thursday == true) {
    let localThursdayTime = thursdayTime - timeZoneHoursOffset
    let localThursdayDay = 'Thursday'
    let amPm = 'am'
    //Roll back to previous day if offset time is <1
    if (localThursdayTime < 1) {
        localThursdayTime = localThursdayTime + 24
        localThursdayDay = 'Wednesday'
    }
    //Roll forward to next day if offset time is >24
    if (localThursdayTime > 24) {
        localThursdayTime = localThursdayTime - 24
        localThursdayDay = 'Friday'
    }
    //Switch from AM to PM if offset time >12
    if (localThursdayTime > 12) {
        localThursdayTime = localThursdayTime - 12
        amPm = 'pm'
    }
    document.getElementById("thursday-schedule").innerHTML = localThursdayDay + ' @' + localThursdayTime + amPm;
}


if (friday == true) {
    let localFridayTime = fridayTime - timeZoneHoursOffset
    let localFridayDay = 'Friday'
    let amPm = 'am'
    //Roll back to previous day if offset time is <1
    if (localFridayTime < 1) {
        localFridayTime = localFridayTime + 24
        localFridayDay = 'Thursday'
    }
    //Roll forward to next day if offset time is >24
    if (localFridayTime > 24) {
        localFridayTime = localFridayTime - 24
        localFridayDay = 'Saturday'
    }
    //Switch from AM to PM if offset time >12
    if (localFridayTime > 12) {
        localFridayTime = localFridayTime - 12
        amPm = 'pm'
    }
    document.getElementById("friday-schedule").innerHTML = localFridayDay + ' @' + localFridayTime + amPm;
}


if (saturday == true) {
    let localSaturdayTime = saturdayTime - timeZoneHoursOffset
    let localSaturdayDay = 'Saturday'
    let amPm = 'am'
    //Roll back to previous day if offset time is <1
    if (localSaturdayTime < 1) {
        localSaturdayTime = localSaturdayTime + 24
        localSaturdayDay = 'Friday'
    }
    //Roll forward to next day if offset time is >24
    if (localSaturdayTime > 24) {
        localSaturdayTime = localSaturdayTime - 24
        localSaturdayDay = 'Sunday'
    }
    //Switch from AM to PM if offset time >12
    if (localSaturdayTime > 12) {
        localSaturdayTime = localSaturdayTime - 12
        amPm = 'pm'
    }
    document.getElementById("saturday-schedule").innerHTML = localSaturdayDay + ' @' + localSaturdayTime + amPm;
}