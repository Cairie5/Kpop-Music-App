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
  