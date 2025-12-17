var intervalidID;
var changeX = 50;
var changeY = 50;
var x = 100;
var y = 100;

function start()
{
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    intervalidID = setInterval(moveimage, 200);
}

function stop()
{
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;

    clearInterval(intervalidID);
}

function moveimage()
{
    var image = document.getElementById("imgMeme");
    image.style.top = y + "px";
    image.style.left = x + "px";

    if (x + image.width > window.innerWidth || x <= 0) 
    {
        changeX = -changeX;
    }

     if (y + image.height > window.innerHeight || y <= 0)
    {
        changeY = -changeY;
    }

    x += changeX;
    y += changeY;
}