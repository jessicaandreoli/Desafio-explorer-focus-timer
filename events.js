import Timer from "./timer.js"
import Sounds from "./sound.js"
import{
  buttonPlay,
  buttonPause,
  buttonAddTime,
  buttonReduceTime,
  buttonSet,
  cardsFlorest,
  cardsFlorestOne,
  cardsRain,
  cardsRainOne,
  cardsCofeeShop,
  cardsCofeeShopOne,
  cardsFireplace,
  cardsFireplaceOne,
} from "./variables.js"

export default function() {

  const sounds = Sounds()
  const timer = Timer()

  cardsFlorestOne.addEventListener('click', function(){
    cardsFlorestOne.classList.add('hide')
    cardsFlorest.classList.remove('hide')
    sounds.cardFlorestPlay()
  })
  
  cardsFlorest.addEventListener('click', function () {
    cardsFlorest.classList.add('hide')
    cardsFlorestOne.classList.remove('hide')
    sounds.cardFlorestPause()
  })
  
  cardsRainOne.addEventListener('click', function () {
    cardsRainOne.classList.add('hide')
    cardsRain.classList.remove('hide')
    sounds.cardRainPlay()
  })
  
  cardsRain.addEventListener('click', function () {
    cardsRain.classList.add('hide')
    cardsRainOne.classList.remove('hide')
    sounds.cardRainPause()
  })
  
  cardsCofeeShopOne.addEventListener('click', function () {
    cardsCofeeShopOne.classList.add('hide')
    cardsCofeeShop.classList.remove('hide')
    sounds.cardCofeeshopPlay()
  })
  
  cardsCofeeShop.addEventListener('click', function () {
    cardsCofeeShop.classList.add('hide')
    cardsCofeeShopOne.classList.remove('hide')
    sounds.cardCofeeshopPause()
  })
  
  cardsFireplaceOne.addEventListener('click', function () {
    cardsFireplaceOne.classList.add('hide')
    cardsFireplace.classList.remove('hide')
    sounds.cardFireplacePlay()
  })
  
  cardsFireplace.addEventListener('click', function () {
    cardsFireplace.classList.add('hide')
    cardsFireplaceOne.classList.remove('hide')
    sounds.cardFireplacePause()
  })
  
  buttonSet.addEventListener('click', function () {
    timer.startTimer()
  })
  
  buttonPlay.addEventListener('click', function () {
    timer.decrementTimer()
  })
  
  buttonPause.addEventListener('click', function () {
    timer.stopTimer()
  })
  
  buttonAddTime.addEventListener('click', function () {
    timer.addTimer()
  })
  
  buttonReduceTime.addEventListener('click', function () {
    timer.reduceTimer()
  })
}

