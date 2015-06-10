function clock() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hoursTwelve = hours;
    var ampm = "AM";

    if (hours < 10) { //adjusting for 0's that need to be added to keep a 6 digit hex code

        hours = "0" + hours;

    }

    if (minutes < 10) {

        minutes = "0" + minutes;

    }

    if (seconds < 10) {

        seconds = "0" + seconds;

    }

    if (hoursTwelve > 12) {

        hoursTwelve -= 12;
        hoursTwelve = "0" + hoursTwelve;
        ampm = "PM"

    }

    hoursTwelve.toString();
    hours.toString();
    minutes.toString();
    seconds.toString(); //update to change it to 12h clock and AM/PM + current City

    var hex = "#" + hours + minutes + seconds;
    var time = hoursTwelve + ":" + minutes + ":" + seconds + " " + ampm;
    var hexLink = "http://www.color-hex.com/color/" + hours + minutes + seconds;

    document.getElementById("time").innerHTML = time; //setting the time and hex values
    document.getElementById("hex").innerHTML = hex;
    document.getElementById("hex").setAttribute("href", hexLink); //setting the href to the proper page

    document.body.style.background = hex;

    setTimeout(function() { clock();}, 1000);

}