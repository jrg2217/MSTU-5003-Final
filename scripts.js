var currentSearch = document.getElementsByClassName("TESTRESULT");
//JavaScript doesn't seem to like it when the currentSearch variable starts off undefined.

function searchTerm() {
  //These first few lines ending with the first for loop hide the previous search results. I tried using a separate function, but I think there was some conflict in the display property that I couldn't resolve no matter which order I placed them in the JavaScript or when called within the HTML.
  for (var i = 0; i < currentSearch.length; i++) {
    currentSearch[i].style.display = "none";
  }
  var searchInput = document.getElementById("searchBar").value;
  //Retrieves the search bar input.
  searchInput = searchInput.replace(/\s+/g, "").toUpperCase();
  //Removes all the spaces and converts all the characters to uppercase in order to account for possible variations in typing.
  var searchResults = document.getElementsByClassName(searchInput);
  //Retrieves all the elements with a class corresponding to the converted input.
  for (var i = 0; i < searchResults.length; i++) {
    searchResults[i].style.display = "block";
  }
  //Displays the elements retrieved above.
  currentSearch = searchResults;
  //Finally, sets the currentSearch to the same set of elements so that they can be removed (or altered in some way, if I implement some other kind of interaction into the page).
}

function openNotes() {
  document.getElementById("notes").style.display = "block";
}

function closeNotes() {
  document.getElementById("notes").style.display = "none";
}

function saveResult(ele) {
  var result = ele.getElementsByTagName("p")[0].innerText;
  //Takes the function parameter (the ID of the relevant search result) and retrieves the inner HTML of the first paragraph element
  var currentNotes = document.getElementById("notes").innerHTML;
  document.getElementById("notes").innerHTML = currentNotes + "<br>" + result + "<br>";
  //Appends the results to any current notes that were already saved.
}
