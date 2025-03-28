const pianoKeys = document.querySelectorAll('.key');
let audio = new Audio('./tunes/a.wav');

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => 
        playKey(key.dataset.key))
})

const playKey = (key) => {
    audio.src = `./tunes/${key}.wav`;
    audio.play();
}

document.addEventListener('keydown', (event) => {
    playKey(event.key);
})