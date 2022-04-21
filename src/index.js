import fitty from 'fitty'
import { toBlob } from 'html-to-image'
import tinykeys from 'tinykeys'
import Toastify from 'toastify-js'
import MobileDetect from 'mobile-detect'
import verbs from './data/verbs'
import animals from './data/animals'
import arrayGetRandom from './array-get-random'
import showTip from './show-tip'
import { registerVisit, isFirstVisit } from './user'
import copyImage from './copy-image'

const $get = id => document.getElementById(id)

// Get device type.
const mobileDetect = new MobileDetect(window.navigator.userAgent)
const isMobile = mobileDetect.mobile()
const deviceType = isMobile ? 'mobile' : 'desktop'

/**
 * Sets a random phrase.
 */
function setPhrase () {
  // Set verb.
  const verb = arrayGetRandom(verbs)
  const $verb = $get('verb')
  $verb.innerHTML = verb

  // Set animal.
  const animal = arrayGetRandom(animals)
  const $animal = $get('animal')
  $animal.innerHTML = animal
}

// Set phrase on load.
setPhrase()

// Show tip.
if (isFirstVisit()) {
  showTip({ deviceType, callback: () => registerVisit() })
}

// Copy as image to clipboard.
if (!isMobile) {
  const $root = $get('root')
  const $container = $get('verb-animal')
  copyImage({ $container, $root })
}

// Refresh.
if (isMobile) {
  // Mobile.
  window.addEventListener('touchend', event => {
    event.preventDefault()
    setPhrase()
  })
} else {
  // Desktop.
  tinykeys(window, {
    Space: () => {
      setPhrase()
    }
  })
}

// Fit to screen.
fitty('#verb-animal')
