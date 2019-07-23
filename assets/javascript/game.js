var gameStart;
var gameOver;
var resetPlay;
var wins = 0;
var losses = 0;
var yourTotal = 0;
var lowNumber = 19;
var highNumber = 120;
var randomNumber = 0;


    // $("#winscore").html(wins);
    // $("#losescore").html(losses);
    // $("#totalscore").html(yourTotal);
    // $("#generated").html(randomNumber);
    // $("#crystal1").attr("value", Math.floor(Math.random() * 12) + 1);
    // $("#crystal2").attr("value", Math.floor(Math.random() * 12) + 1);
    // $("#crystal3").attr("value", Math.floor(Math.random() * 12) + 1);
    // $("#crystal4").attr("value", Math.floor(Math.random() * 12) + 1);
    // console.log(crystal1, crystal2, crystal3, crystal4)

//generate random number between 19-120
// function numberRange(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }  



$("#crystal1").on("click", function() {     
    var t=$(this)
    var value = parseInt(t[0].attributes[1].value)
    yourTotal += value;
    //console.log(yourTotal)
    checkRandomNumber();
});

$("#crystal2").on("click", function() {     
    var t=$(this)
    var value = parseInt(t[0].attributes[1].value)
    yourTotal += value;
    //console.log(yourTotal)
    checkRandomNumber();
});

$("#crystal3").on("click", function() {     
    var t=$(this)
    var value = parseInt(t[0].attributes[1].value)
    yourTotal += value;
    //console.log(yourTotal)
    checkRandomNumber();
});

$("#crystal4").on("click", function() {     
    var t=$(this)
    var value = parseInt(t[0].attributes[1].value)
    yourTotal += value;
    //console.log(yourTotal)
    checkRandomNumber();
});

function checkRandomNumber(){
    console.log(yourTotal)
    if (yourTotal===randomNumber) {
        wins++;
        $("#winscore").html(wins);
        alert("Won Game");
        startGame();
    } else if (yourTotal>randomNumber) {
        console.log("lose")
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
} 
startGame();
  //wins:
        //$(".button-title-chosen-for-first-button").click(function (){
                //score += crystalValue1;
                //#update the display of the score on the page
            //});
