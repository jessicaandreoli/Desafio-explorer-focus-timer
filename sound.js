export default function Sounds() {
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const florest = new Audio("./assets/sounds/Floresta.mp3")
  const rain = new Audio("./assets/sounds/Chuva.mp3")
  const cofeeShop = new Audio ("./assets/sounds/Cafeteria.mp3")
  const fireplace = new Audio("./assets/sounds/Lareira.mp3")
  
  function timeEnd() {
    kitchenTimer.play()
  }

  function cardFlorestPlay() {
    florest.play()
  }

  function cardRainPlay() {
    rain.play()
  }

  function cardCofeeshopPlay() {
    cofeeShop.play()
  }

  function cardFireplacePlay () {
    fireplace.play()
  }

  function cardFlorestPause() {
    florest.pause()
  }

  function cardRainPause() {
    rain.pause()
  }

  function cardCofeeshopPause() {
    cofeeShop.pause()
  }

  function cardFireplacePause () {
    fireplace.pause()
  }

  return {
    timeEnd,
    cardFlorestPlay,
    cardRainPlay,
    cardCofeeshopPlay,
    cardFireplacePlay,
    cardFlorestPause,
    cardRainPause,
    cardCofeeshopPause,
    cardFireplacePause
  }
}




