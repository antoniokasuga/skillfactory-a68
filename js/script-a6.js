let progressBar = 0;
var bar = document.getElementById("myProgress");

function addOnePercent(){
  progressBar += 1;
  bar.style.width = progressBar + "%";
}

function addThreePercent(){
  progressBar += 3;
  bar.style.width = progressBar + "%";
}

function addSevenPercent(){
  progressBar += 7;
  bar.style.width = progressBar + "%";
}

function init() {
  console.log("Готово!");
}

$(document).ready(init);