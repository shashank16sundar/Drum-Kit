for (var i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown",function(event) {
  var keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(buttonInnerHTML);
})

function makeSound(key)
{
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/snare.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/tom1.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/tom2.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom3.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/tom4.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;
    case "l":
      var audio7 = new Audio("sounds/kick.mp3");
      audio7.play();
      break;
    default:
      console.log(keyPressed);
  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + currentKey).classList.remove("pressed");
  },100);
}
