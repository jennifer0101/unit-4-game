var gameStart= false;
var gameOver = false;
var resetPlay;
var wins = 0;
var losses = 0;
var yourTotal = 0;


function gamestart() {
    console.log("game is starting")
    gameStart = false;
    wins = 0;
    losses = 0;
    yourtotal = 0;
    randomNumber(); 
}  $("#winscore").html("0");


//generate random number between 19-120
var lowNumber = 19;
var highNumber = 120;
var randomNumber = numberRange(lowNumber, highNumber);

    function numberRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}  $("#generated").html(randomNumber);





//$("#generated").text(numberRange);

//$("#generated").html(numberRange);
console.log(randomNumber);
/*#crystal1
    #cyrstal2
    #cyrstal3
    #cyrstal4*/







