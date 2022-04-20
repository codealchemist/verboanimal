import Toastify from 'toastify-js'

export default function showTip(cb) {
  setTimeout(() => {
    Toastify({
      text: 'Tip: Tocá la barra para refrescar 😂',
      duration: 5000,
      gravity: 'bottom',
      position: 'left',
      className: 'tip'
    }).showToast()
    
    if (typeof cb === 'function') {
      cb()
    }
  }, 3000)
}
