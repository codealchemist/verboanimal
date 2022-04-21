import Toastify from 'toastify-js'
import { toBlob } from 'html-to-image'

/**
 * Captures webpage content as image and copies it
 * to clipboard. Can be pasted into other apps.
 * $container adds a click event listener to fire the copy action.
 * $root is the element that will be copied as image.
 *
 * @param {object} { $container, $root }
 */
export default function copyImage ({ $container, $root }) {
  $container.addEventListener('click', async () => {
    const imageData = await toBlob($root)
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': imageData })
    ])
    console.log('Image copied to clipboard!', imageData)
    Toastify({
      text: 'Imagen copiada!',
      duration: 3000,
      gravity: 'bottom',
      position: 'left',
      className: 'notification'
    }).showToast()
  })
}
