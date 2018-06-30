
function playSound(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  key.classList.add('playing')
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing')
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);