//Declare contants
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runClock() {
    //Create a date object
    var date = new Date();

    //Get current hours, minutes and seconds
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    //Display on console
    //Comment out if required
    console.log("Hr: " + hr + " Min: " + min + " Sec: " + sec);

    //Convert hours, minutes and seconds into degree values
    let hrPosition = (hr * 360 / 12) + ((min * 360 / 60) / 12);
    let minPosition = (min * 360 / 60) + ((sec * 360 / 60) / 60);
    let secPosition = sec * 360 / 60;

    //Rotate the arms by the appropriate number of degrees
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//Update every second
var interval = setInterval(runClock, 1000);