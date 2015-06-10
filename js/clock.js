function clock() { //TODO: refactor to break down into subfunctions

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

    getLocation();

    var hex = "#" + hours + minutes + seconds;
    var time = hoursTwelve + ":" + minutes + ":" + seconds + " " + ampm;
    var hexLink = "http://www.color-hex.com/color/" + hours + minutes + seconds;
    var city = document.getElementById("address").innerHTML;
    var mapLink = "http://maps.google.com/?q=" + city;

    document.getElementById("time").innerHTML = time; //setting the time and hex values
    document.getElementById("hex").innerHTML = hex;
    document.getElementById("hex").setAttribute("href", hexLink); //setting the hrefs to the proper pages
    document.getElementById("address").setAttribute("href", mapLink);

    document.body.style.background = hex;

    setTimeout(function() { clock();}, 1000);

}


function getLocation() {

    $.get("http://ipinfo.io", function (response) {

        if (response.country == "US") {

            response.country = "USA";

        }

        $("#address").html(response.city + ", " + response.region);

        var locationLink = "http://www.timeanddate.com/worldclock/" + response.country.toLowerCase()
            + "/" + response.city.toLowerCase();

        document.getElementById("time").setAttribute("href", locationLink);

    }, "jsonp");


}