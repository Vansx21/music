const songs = [
    {title: "Michael Jackson - Billie Jean (Official Video)", src: "../audIo/Michael Jackson - Billie Jean (Official Video).mp3"},
    {title: "The Weeknd - Save Your Tears (Official Music Video)", src: "../audio/The Weeknd - Save Your Tears (Official Music Video).mp3"},
    {title: "OHNANA - Kapo (Video Oficial)", src: "../audio/OHNANA - Kapo (Video Oficial).mp3"},
    {title: "Blessd, Ovy On The Drums - Mírame", src: "../audio/Blessd, Ovy On The Drums - Mírame.mp3"},
    {title: "Kiss - I Was Made For Lovin You", src: "../audio/Kiss - I Was Made For Lovin You.mp3"},
    {title: "Romeo Santos - Que Se Mueran (Letra)", src: "../audio/Romeo Santos - Que Se Mueran (Letra).mp3"},
    {title: "Virgen - Adolescentes Letra", src: "../audio/Virgen - Adolescentes Letra.mp3"},
    {title: "Eminem - Lose Yourself [HD]", src: "../audio/Eminem - Lose Yourself [HD].mp3"},
    {title: "Nada - Dread Mar-I (letralyrics)", src: "../audio/Nada - Dread Mar-I (letralyrics).mp3"},
    {title: "Camilo - Manos de Tijera", src: "../audio/Camilo - Manos de Tijera.mp3"}
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');

function loadSong(songIndex) {
    const song = songs[songIndex];
    audioPlayer.src = song.src;
    songTitle.textContent = `Reproduciendo: ${song.title}`;
}

function playPauseSong() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById('play-pause').textContent = '❚❚';
    } else {
        audioPlayer.pause();
        document.getElementById('play-pause').textContent = '▶️';
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

document.getElementById('play-pause').addEventListener('click', playPauseSong);
document.getElementById('next').addEventListener('click', nextSong);
document.getElementById('prev').addEventListener('click', prevSong);
audioPlayer.addEventListener('ended', nextSong);

// Load the first song
loadSong(currentSongIndex);