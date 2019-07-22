var gameStart = false;
var gameOver = false;
var resetPlay;
var wins = 0;
var losses = 0;
var yourTotal = 0;



//start game
function gameStart() {
    gameStart = false;
    wins = 0;
    losses = 0;
    yourtotal = 0;
} console.log("game is starting")




//shows 0 for score on startup
$("#winscore").text("0");
$("#losescore").text("0");
$("#totalscore").text("0");




//generate random number between 19-120
var lowNumber = 19;
var highNumber = 120;
var randomNumber = numberRange(lowNumber, highNumber);

function numberRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}  $("#generated").html(randomNumber);

console.log(randomNumber);




//genrates random number between 1-12 for each crystal
//function assignGemRandom () {
$("#crystal1").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal2").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal3").attr("value", Math.floor(Math.random() * 12) + 1);
$("#crystal4").attr("value", Math.floor(Math.random() * 12) + 1);
//}
console.log(crystal1, crystal2, crystal3, crystal4)




// $("#crystal1").attr("#buttons");
// var yourTotal = $( "#totalScore" )
// $("#crystal1").click(function () {     
//      buttons += yourTotal;
//        //#update the display of score on the page
// }); console.log(yourTotal)











  //wins:
        //$(".button-title-chosen-for-first-button").click(function (){
                //score += crystalValue1;
                //#update the display of the score on the page
            //});
