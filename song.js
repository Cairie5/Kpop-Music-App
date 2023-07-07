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
      },
      {
        file: "Music/BTS.mp3",
        title: "Fire",
        duration: "4:54",
      },
      {
        file: "Music/Blackswan.mp3",
        title: "Karma",
        duration: "3:41",
      },
      {
        file: "Music/TXT.mp3",
        title: "Sugar Rush Ride",
        duration: "3:33",
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