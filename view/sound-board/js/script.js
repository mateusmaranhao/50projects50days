const sounds = ["ps1", "ps2", "ps3", "ps4", "ps5"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs()

    document.getElementById(sound).play()
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    
    song.pause();
    song.currentTime = 0;
  });
}
