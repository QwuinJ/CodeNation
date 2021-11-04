let day = "friday";

let alarmCheck = {
    weekendAlarm: "no alarm. go back to sleep",
    weekdayAlarm: "*beeb beeb beeb*",
}

let alarm = "beeb";

const alarmClock = function() {
    if (day == "Saturday" || day == "Sunday") {
        let alarm = alarmCheck.weekendAlarm;
        console.log(alarmCheck.weekendAlarm);
    } else {
        let alarm = alarmCheck.weekdayAlarm;
        console.log(alarmCheck.weekdayAlarm);
    }
}

alarmClock();
