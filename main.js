// get all keys
const keys = document.querySelectorAll(".key")

// função para tocar musica
function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);

  // typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  // if key exists
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }

  addPlayingClass(key) // coloca um efeito na tecla 
  playAudio(audioKeyCode)
}

// adiciona a class na tecla q esta sendo digitada ou clicada 
function addPlayingClass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"

  if(isKeyboard) {
    // pega a tecla se for teclado
    keyCode = event.keyCode  

  } else {
    keyCode = event.target.dataset.key

  }

  return keyCode
}

// play audio
function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`) // pega qual audio sera tocado
  audio.currentTime = 0;
  audio.play()
}

// remove a class 
function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

function registerEvents() {
  // click with mouse
  keys.forEach( function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass) // quando acabar a transição remove
  })

  // keyboard type
  window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)