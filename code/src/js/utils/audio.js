let audioElement = null

function play(audioFile) {
  if (audioElement) audioElement.pause()

  audioElement = new Audio(audioFile)
  audioElement.play()
}

function pause() {
  if (audioElement) audioElement.pause()
}

function resume() {
  if (audioElement && audioElement.paused) audioElement.play()
}

function setVolume(volume) {
  if (audioElement) audioElement.volume = volume
}

export { play, pause, resume, setVolume }
