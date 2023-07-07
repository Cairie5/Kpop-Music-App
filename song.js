let playButton = document.querySelector ('.play-button');
let audioPlayer = new Audio();
playButton.addEventListener ('click', function(){
    let songList = document.querySelectorAll ('.song-list li');
    let selectedSong = songList[0].innertext;
    audioPlayer.src = getSongURL("Music/" + selectedSong + ".mp3");
    // audioPlayer.src = "Music/" + selectedSong + ".mp3";
    console.log(audioPlayer.src);
    audioPlayer.play();
})
