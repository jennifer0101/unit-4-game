var gameStart;
var gameOver;
var resetPlay;
var wins = 0;
var losses = 0;
var yourTotal = 0;
var lowNumber = 19;
var highNumber = 120;
var randomNumber = 0;


$("#crystal1").on("click", function() {     
    var t=$(this)
    var value = parseInt(t[0].attributes[1].value)
    yourTotal += value;
    $("#totalscore").html(yourTotal);
    console.log(yourTotal);
    checkRandomNumber();
});

$("#crystal2").on("click", function() {     
    var t=$(this)
    var value = parseInt(t[0].attributes[1].value)
    yourTotal += value;
    $("#totalscore").html(yourTotal);
    console.log(yourTotal);
    checkRandomNumber();
});

$("#crystal3").on("click", function() {     
    var t=$(this)
    var value = parseInt(t[0].attributes[1].value)
    yourTotal += value;
    $("#totalscore").html(yourTotal);
    console.log(yourTotal);
    checkRandomNumber();
});

$("#crystal4").on("click", function() {     
    var t=$(this)
    var value = parseInt(t[0].attributes[1].value)
    yourTotal += value;
    $("#totalscore").html(yourTotal);
    console.log(yourTotal);
    checkRandomNumber();
});

function checkRandomNumber(){
    //console.log(yourTotal)
    if (yourTotal===randomNumber) {
        wins++;
        $("#winscore").html(wins);
        $("#losewin").html("You win!")
        //$("#losewin").alert("You win!")
        //alert("Won Game");
        startGame();
    } else if (yourTotal>randomNumber) {
        losses++;
        $("#losescore").html(losses);
        $("#losewin").html("You lose!")
        //$("#losewin").alert("You lose!")
        //alert("Lost Game");
        startGame();
    }
} 



function startGame() {
    randomNumber=Math.floor(Math.random()*(120-19+1)+19);
    yourTotal=0;
    $("#winscore").html(wins);
    $("#losescore").html(losses);
    $("#totalscore").html(yourTotal);
    $("#generated").html(randomNumber);
    $("#crystal1").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#crystal2").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#crystal3").attr("value", Math.floor(Math.random() * 12) + 1);
    $("#crystal4").attr("value", Math.floor(Math.random() * 12) + 1);
    console.log("reset")
} 
startGame();
