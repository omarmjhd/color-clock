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
    seconds.toString();

    var hex = "#" + hours + minutes + seconds;
    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerHTML = time;
    document.getElementById("hex").innerHTML = hex;
    document.body.style.background = hex;

    setTimeout(function() { clock();}, 1000);

}