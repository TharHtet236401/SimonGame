
var buttonColours = ["red", "blue", "green", "yellow"];
userClickedPattern=[];
var level=0;

var started=false;


var gamePattern = [];

$(document).keypress(function(){
  if (!started) {
    nextSequence();
    started = true;}
  
})

$(".btn").click(function(event){

      userChosenColour=this.id
      userClickedPattern.push(userChosenColour)
      console.log(userClickedPattern)
      playSound(userChosenColour);
      animate(userChosenColour);
      checkAnswer(userClickedPattern.length-1);
  
    
})

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
    $("h1").text("Game Over, Press Any Key to Restart")
    startOver();
  }

}
function nextSequence() {
  userClickedPattern=[];
  level++
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);


}
function playSound(userChosenColour){
      switch (userChosenColour) {
        case "red":
          var red=  new Audio("sounds/red.mp3");
          red.play();
          break;

          case "green":
          var green=  new Audio("sounds/green.mp3");
          green.play();
          break;

          case "blue":
          var blue=  new Audio("sounds/blue.mp3");
          blue.play();
          break;

          case "yellow":
          var yellow=  new Audio("sounds/yellow.mp3");
          yellow.play();
          break;
    
        default:
          break;
       }
    }
function animate(currentColour){
      $("."+currentColour).addClass("pressed");
      setTimeout(function(){
            $("."+currentColour).removeClass("pressed");    
      },100)
}  

function startOver(){
  level=0;
  started=false;
  gamePattern = [];
}



