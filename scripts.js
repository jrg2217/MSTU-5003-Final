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
