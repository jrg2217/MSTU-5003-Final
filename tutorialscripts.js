var instructions = [
  "Hello! Welcome to your first day of fact-checking! I'm going to explain how this will work! Click on this box to continue.",
  "Misinformation is spreading across the United Bird States of Bird America. In today's world, it's important to learn how to tell the difference between fact and fiction.",
  "You'll be presented with an article, website, image, or video with some kind of claim. Your job is to determine whether it's real, fake, or misleading. Let's take a look at an example.",
  "Here we have an article to assess. You can't really tell how reliable it is just by looking at it, right? Sometimes you can if it's poorly-made, but not in this case.",
  "So how do we figure out if it's real, fake, or misleading? We have to look outside what we can see here!",
  "Often, the answer is hidden elsewhere on the Internet. We want to look at what others are saying about the claim and the source that made it.",
  "Here's our search bar. Get used to it, because we'll be using it a lot! You can type in a search term and then press the Search button to find other information.",
  "So, what should we search for? In each piece of information you assess, you'll want to look for key words and terms that might help you find further info. Search some of the highlighted terms to start!",
  "Hello, I'm back! See those results? You can save their text content to your notes, then check them with the Open Notes button at the top right! And of course, you can edit your notes yourself.",
  "Your search results might give you additional keywords to search. When you think you know if the article is fake, real, or misleading, select your answer and type in your explanation."
];

var i = 0;
var currentInstructions = instructions[i];
var tutorialBirdPic = '<img src="images/tutorialbird.png" alt="Yellow bird" id="birdPic">';

function displayInstructions() {
  document.getElementById("instructions").innerHTML = tutorialBirdPic + currentInstructions;
  var children = document.body.children;
  for (var c = 0; c < children.length; c++) {
    if (children[c].id != "instructions") {
      children[c].style.filter = "blur(4px)";
    }
  }
  document.getElementById("header").style.filter = "blur(0px)";
  document.getElementById("footer").style.filter = "blur(0px)";
}

function proceedInstructions() {
  i++;
  currentInstructions = instructions[i];
  document.getElementById("instructions").innerHTML = tutorialBirdPic + currentInstructions;
  switch (i) {
    case 3:
      document.getElementById("instructions").className = "shift";
      document.querySelector(".container").style.filter = "blur(0px)";
      break;
    case 6:
      document.getElementById("search").style.filter = "blur(0px)";
      break;
    case 7:
      document.querySelector(".articleContent").innerHTML = 'Late Thursday night an anonymous tipster posted pictures of Bird Senate candidate <span style="background-color: yellow">Horace Beaksworth</span>\'s stash of stolen corn, almost an entire year\'s worth. Beaksworth\'s stunning hypocrisy, as a candidate running on a platform of austerity in corn consumption, was condemned by birds all over the Bird Internet.';
      document.querySelector(".articleHeader").style.background = "yellow";
      break;
    case 8:
      document.getElementById("instructions").style.display = "none";
      break;
    case 9:
      document.getElementById("judge").style.filter = "blur(0px)";
      break;
    case instructions.length:
      document.getElementById("instructions").style.display = "none";
      break;
  }
}

function instructionsContinued() {
  if (i <= 8) {
    document.getElementById("instructions").style.display = "block";
    document.getElementById("allSearchResults").style.filter = "blur(0px)";
    document.getElementById("openNotes").style.filter = "blur(0px)";
    document.getElementById("notes").style.filter = "blur(0px)";
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
      var congratsMessageHTML = '<div id="congratsMessage" style="position: fixed; top: 5%; left: 20%; z-index: 3"><img src="images/congrats.gif" alt="Congratulations"></div>';
      document.body.innerHTML = document.body.innerHTML + congratsMessageHTML;
      return false;
    }
    else {
      document.getElementById("explanation").value = "Not quite. Try searching for other clues.";
      return false;
    }
  }
}
