function updateTime() {

    let d = new Date();

    ///Clock section
    const hourEL = document.querySelector('#hour');
    const minuteEL = document.querySelector('#minute');
    const secondEL = document.querySelector('#second');
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours >= 0 && hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    hourEL.innerHTML = hours;
    minuteEL.innerHTML = minutes;
    secondEL.innerHTML = seconds;

    ///Date section
    const dateEL = document.querySelector('#date');
    let date = d.getDate();
    let monthnumber = d.getMonth();
    let year = d.getFullYear();
    if (date >= 0 && date <= 9) {
        date = "0" + date;
    }
    if (year >= 0 && year <= 9) {
        year = "0" + year;
    }
    let month = "";
    switch (monthnumber) {
        case 0: month = "01"; break;
        case 1: month = "02"; break;
        case 2: month = "03"; break;
        case 3: month = "04"; break;
        case 4: month = "05"; break;
        case 5: month = "06"; break;
        case 6: month = "07"; break;
        case 7: month = "08"; break;
        case 8: month = "09"; break;
        case 9: month = "10"; break;
        case 10: month = "11"; break;
        case 11: month = "12"; break;
        default: break;
    }
    dateEL.innerHTML = `${date}/${month}/${year}`;

    //Day section
    const dayEL = document.querySelector('#day');
    let daynumber = d.getDay();
    let day = "";
    switch (daynumber) {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
        default: break;
    }
    dayEL.innerHTML = day;
}

window.onload = function () {
    setInterval(updateTime, 1000)
};