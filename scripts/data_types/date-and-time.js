// #1 Create a date
/*
let date = new Date(2012, 01, 20, 3, 12);

alert(date);
*/


// #2 Show a weekday
/*
function getWeekDay(date) {
    let weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    
    return weekDays[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"
*/


// #3 European weekday
/*
function getLocalDay(date) {
    if (date.getDay() == 0) {
        return 7;
    }

    return date.getDay();
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2
*/

// #4 Which day of month was many days ago?
/*
function getDateAgo(date, days) {
    let resultDate = new Date();
    resultDate.setTime(date.getTime());

    resultDate.setDate(resultDate.getDate() - days);

    return resultDate.getDate();
}

let date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
*/

// #5 Last day of month?
/*
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month+1);
    date.setDate(date.getDate()-1);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));
*/

// #6 How many seconds have passed today?
/*
function getSecondsToday() {
    let now = new Date();
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return Math.round((now-startOfDay)/1000);
}

console.log(getSecondsToday());
*/

// #7 How many seconds till tomorrow?
/*
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    return Math.round((tomorrow - now)/1000);
}

console.log(getSecondsToTomorrow()); 
*/

// #8 Format the relative date

function formatDate(date) {
    let now = new Date();

    let diff = now - date;

    if (diff < 1000) {
        return "right now"
    }

    if (diff < 60 * 1000 && diff >= 1000) {
        return `${diff/1000} sec. ago`;
    }

    if (diff < 60* 60 * 1000 && diff >= 60 * 1000) {
        return `${diff/60/1000} min. ago`;
    }

    else {
        let dateToReturn = [];
        let day = date.getDate();
        if(day < 10) {
            day = "0"+day;
        }
        dateToReturn.push(day);

        let month = date.getMonth()+1;
        if(month < 10) {
            month = "0"+month;
        }
        dateToReturn.push(month);

        dateToReturn.push(String(date.getFullYear()).slice(-2));
    
        let timeToReturn = [];
        
        let hours = date.getHours();
        if (hours < 10) {
            hours = "0"+hours;
        }
        timeToReturn.push(hours);

        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0"+minutes;
        }
        timeToReturn.push(minutes);
    
        return dateToReturn.join('.') + ' ' + timeToReturn.join(':');
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

alert( formatDate(new Date(new Date - 86400 * 1000)) );