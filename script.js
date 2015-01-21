// Set up a handler to handle the user's click on the "Add Song" button

window.onload = init;
function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	loadPlaylist();
}
function handleButtonClick() {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	if (songName == "") {
		alert("Please enter a song.");
	} else {
	//	alert("Adding " + songName);
	}
	// Create a new element to hold the new song
	var li = document.createElement("li");
	li.textContent = songName;
	// Add the new element to the page's DOM
	var ul = document.getElementById("playlist");
	ul.appendChild(li);
	save(songName);
}