import {buttonTimer, displayMinutes, displaySeconds} from "./variables.js"
import Sounds from "./sound.js"

export default function () {
  let minutes
  let seconds
  let newMinutes
  let setTimer

  const sounds = Sounds()

  function addTimer() {
    minutes = Number(displayMinutes.textContent)
    if (minutes == 60) {
      alert('Não é possível aumentar, você já atingiu o máximo de minutos permitidos')
    } else {
      updateDisplay((minutes + 5), 0)
    }
  }

  function reduceTimer() {
    minutes = Number(displayMinutes.textContent)
    if (minutes == 0) {
      alert('Não é possível reduzir, você já atingiu o mínimo de minutos permitidos')
    } else {
      updateDisplay((minutes - 5), 0)
    }
  }

  function startTimer() {
    newMinutes = prompt("Digite os minutos:")
    seconds = 0

    if (!newMinutes || newMinutes > 60) {
      newMinutes = 60
    }
    minutes = newMinutes
    updateDisplay(minutes, seconds)
  }

  function updateDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, "0")
    displaySeconds.textContent = String(seconds).padStart(2, "0")
  }

  function decrementTimer() {

    setTimer = setTimeout(function () {

      minutes = Number(displayMinutes.textContent)
      seconds = Number(displaySeconds.textContent)

      if (seconds == 0) {
        seconds = 60
        --minutes
      }
      updateDisplay(minutes, String(seconds - 1))
      --seconds

      if (minutes == 0 && seconds == 0) {
        resetTimer()
        return
      }

      decrementTimer()
    }, 1000
    )
  }

  function resetTimer() {
    stopTimer()
    sounds.timeEnd()
    updateDisplay(newMinutes, 0)
  }

  function stopTimer() {
    clearTimeout(setTimer)
  }

  return {
    addTimer,
    reduceTimer,
    startTimer,
    updateDisplay,
    decrementTimer,
    resetTimer,
    stopTimer
  }
}

