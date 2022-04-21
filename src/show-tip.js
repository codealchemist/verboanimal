import Toastify from 'toastify-js'

const tips = {
  desktop: 'Tip: Tocá la barra para refrescar 😂',
  mobile: 'Tip: Tocá con el dedito tap para refrescar 😆'
}

export default function showTip ({ deviceType = 'desktop', callback }) {
  setTimeout(() => {
    Toastify({
      text: tips[deviceType],
      duration: 5000,
      gravity: 'bottom',
      position: 'left',
      className: 'tip'
    }).showToast()

    if (typeof callback === 'function') {
      callback()
    }
  }, 3000)
}
