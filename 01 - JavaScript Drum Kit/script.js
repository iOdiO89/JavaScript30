const endTransition = (e) => e.target.classList.remove('playing')
const buttons = Array.from(document.querySelectorAll('.key'))
buttons.forEach((button) => button.addEventListener('transitionend', endTransition))

const playAudio = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const button = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if (!audio) return

  button.classList.add('playing')
  audio.currentTime = 0 // 재생시점을 처음으로 돌림
  audio.play()
}
window.addEventListener('keydown', playAudio)
