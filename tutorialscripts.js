var instructions = [
  "Hello! Welcome to your first day of fact-checking! I'm going to explain how this will work! Click on this box to continue.",
  "Misinformation is spreading across the United Bird States of Bird America. In today's world, it's important to learn how to tell the difference between fact and fiction.",
  "You'll be presented with an article, website, image, or video with some kind of claim. Your job is to determine whether it's real, fake, or misleading. Let's take a look at an example."
];

var i = 0;
var currentInstructions = instructions[i];
var tutorialBirdPic = '<img src="images/tutorialbird.png" alt="Yellow bird" id="birdPic">';

function displayInstructions() {
  document.querySelector("#instructions").innerHTML = tutorialBirdPic + currentInstructions;
  var children = document.body.children;
  for (var c = 0; c < children.length; c++) {
    if (children[c].id != "instructions") {
      children[c].style.filter = "blur(2px)";
    }
  }
}

function proceedInstructions() {
  if (i < instructions.length - 1) {
    i++;
    currentInstructions = instructions[i];
    document.getElementById("instructions").innerHTML = tutorialBirdPic + currentInstructions;
  }
  else {
    document.getElementById("instructions").style.display = "none";
    var children = document.body.children;
    for (var c = 0; c < children.length; c++) {
      children[c].style.filter = "blur(0px)";
    }
  }
}

var currentSearch = 0;

function searchTerm() {
  for (var i = 0; i < currentSearch.length; i++) {
    currentSearch[i].style.display = "none";
  }
  var searchInput = document.getElementById("searchBar").value;
  searchInput = searchInput.replace(/\s+/g, "").toUpperCase();
  var searchResults = document.getElementsByClassName(searchInput);
  if (searchResults.length == 0) {
    document.getElementById("noResults").style.display = "block";
  }
  else {
    document.getElementById("noResults").style.display = "none";
    for (var i = 0; i < searchResults.length; i++) {
    searchResults[i].style.display = "block";
    }
  }
  currentSearch = searchResults;
}


function openNotes() {
  document.getElementById("notes").style.display = "block";
}

function closeNotes() {
  document.getElementById("notes").style.display = "none";
}

function saveResult(ele) {
  var result = ele.getElementsByTagName("p")[0].innerText;
  var currentNotes = document.getElementById("notesInput").value;
  document.getElementById("notesInput").value = currentNotes + "\r\n" + result;
}

function checkDecision() {
  var correctOrNot = document.getElementById("misleadingRadio").checked;
  var explanation = document.getElementById("explanation").value;
  if (explanation != "") {
    if (correctOrNot) {
      alert("Congratulations, you're correct!");
    }
    else {
      alert("Not quite. Try searching for more clues.");
    }
  }
}
