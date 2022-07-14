var score = 0
let doneText = document.querySelector("#done")

function done() {
  doneText.style.display = "block";
  doneText.innerHTML += " You got " + score + " out of 5";
}

function game() {
  var x = document.getElementById("question1");
  x.style.display = "block";
  }

function game2wrong() {
  var x = document.getElementById("question2");
  x.style.display = "block";
  }

function game2right() {
  var x = document.getElementById("question2");
  x.style.display = "block";
  score += 1;
  }

function game3right() {
  var x = document.getElementById("question3");
  x.style.display = "block";
  score += 1;
  }

function game3wrong() {
  var x = document.getElementById("question3");
  x.style.display = "block";
  }

function game4right() {
  var x = document.getElementById("question4");
  x.style.display = "block";
  score += 1;
  }

function game4wrong() {
  var x = document.getElementById("question4");
  x.style.display = "block";
  }

function game5wrong() {
  var x = document.getElementById("question5");
  x.style.display = "block";
  }

function game5right() {
  var x = document.getElementById("question5");
  x.style.display = "block";
  score += 1;
  }

function allDoneright() {
  var x = document.getElementById("question5");
  x.style.display = "block";
  score += 1;
  done()
  }

function allDoneWrong() {
  var x = document.getElementById("question5");
  x.style.display = "block";
  done()
  }






