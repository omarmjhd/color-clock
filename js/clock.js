function clock() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10) {

        hours = "0" + hours;

    }

    if (minutes < 10) {

        minutes = "0" + minutes;

    }

    if (seconds < 10) {

        seconds = "0" + seconds;

    }

    hours.toString();
    minutes.toString();
    seconds.toString(); //update to change it to 12h clock and AM/PM + current City

    var hex = "#" + hours + minutes + seconds;
    var time = hours + ":" + minutes + ":" + seconds;
    var hexLink = "http://www.color-hex.com/color/" + hours + minutes + seconds;

    document.getElementById("time").innerHTML = time; //setting the time and hex values
    document.getElementById("hex").innerHTML = hex;

    document.getElementById("hex").setAttribute("href", hexLink); //testing setting the href

    document.body.style.background = hex;

    setTimeout(function() { clock();}, 1000);

}