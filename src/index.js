import fitty from 'fitty'
import { toBlob } from 'html-to-image'
import tinykeys from 'tinykeys'
import Toastify from 'toastify-js'
import verbs from './verbs'
import animals from './animals'
import arrayGetRandom from './array-get-random'
import showTip from './show-tip'
import { registerVisit, isFirstVisit } from './user'

const $get = (id) => document.getElementById(id)

function setPhrase() {
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
  showTip(() => registerVisit())
}

// Copy as image to clipboard.
const $root = $get('root')
const $container = $get('verb-animal')
$container.addEventListener('click', async () => {
  const imageData = await toBlob($root)
  await navigator.clipboard.write([new ClipboardItem({ 'image/png': imageData })])
  console.log('Image copied to clipboard!', imageData)
  Toastify({
    text: 'Imagen copiada!',
    duration: 3000,
    gravity: 'bottom',
    position: 'left',
    className: 'notification'
  }).showToast()
})

// Refresh.
tinykeys(window, {
  'Space': () => {
    setPhrase()
  }
})

// Fit to screen.
fitty('#verb-animal')
