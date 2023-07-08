document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const playlist = document.getElementById("playlist");
    const currentSong = document.getElementById("current-song");
    const songDuration = document.getElementById("song-duration");
    const songGenre = document.getElementById("song-genre");
  
       // Array of music files with associated details
    const musicFiles = [
      {
        file: "Music/B.I.mp3",
        title: "Btbt",
        duration: "3:43",
        artist: "B.I.",
      },
      {
        file: "Music/BTS.mp3",
        title: "Fire",
        duration: "4:54",
        artist: "BTS",
      },
      {
        file: "Music/Blackswan.mp3",
        title: "Karma",
        duration: "3:41",
        artist: "Blackswan",
      },
      {
        file: "Music/TXT.mp3",
        title: "Sugar Rush Ride",
        duration: "3:33",
        artist: "TXT",
      },
      {
        file: "Music/ENHYPEN.mp3",
        title: "Fever",
        duration: "4:10",
        artist: "ENHYPEN",
      },
      {
        file: "Music/Monsta-x.mp3",
        title: "Who Do U Love",
        duration: "3:19",
        artist: "Monsta-x"
      }
    ];
  
  
    // Add songs to the playlist
    musicFiles.forEach(function(song, index) {
      const listItem = document.createElement("li");
      listItem.textContent = song.title;
  
      listItem.addEventListener("click", function() {
        audioPlayer.src = song.file;
        audioPlayer.play();
  
        // Update currently playing song, duration, and genre
        currentSong.textContent = song.title;
        songDuration.textContent = song.duration;
        songGenre.textContent = song.genre;
      });
  
      playlist.appendChild(listItem);
    });
  });
  
  document.getElementById("logoutButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Perform logout actions
  logoutUser();

  // Redirect the user to the login page
  window.location.href = "login.html";
});

function logoutUser() {
  console.log("Logged out successfully.");
}

 // Array of K-pop songs
const searchData = [
  'Dynamite',
  'Boy With Luv',
  'Kill This Love',
  'Gangnam Style',
  'DNA',
  'Fancy',
  'Love Scenario',
  'Fake Love',
  'Ice Cream',
  'How You Like That',
  'TT',
  'MIC Drop',
  'Ddu-Du Ddu-Du',
  'Blood Sweat & Tears',
  'Whistle',
  'Btbt',
  'Fire',
  'Karma',
  'Sugar Rush Ride',
  'Fever',
  'Who Do You Love',
];

// Get references to the HTML elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// Add a click event listener to the search button
searchButton.addEventListener('click', () => {
  // Get the search query entered by the user
  const query = searchInput.value.toLowerCase();

  // Filter the K-pop songs based on the query
  const filteredResults = searchData.filter(song =>
    song.toLowerCase().includes(query)
  );

  // Display the filtered results
  displayResults(filteredResults);
});

// Function to display the search results
function displayResults(results) {
  // Clear previous results
  searchResults.innerHTML = '';

  // Check if there are no results
  if (results.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No results found.';
    searchResults.appendChild(noResultsMessage);
    return;
  }

  // Iterate over the filtered results and display them
  results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.textContent = result;
    searchResults.appendChild(resultItem);
  });
}
 