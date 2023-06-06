function sendWhatsApp({ phone, message }) {
  // const url = `https://web.whatsapp.com/send?phone=${phone}&text=${message}`
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`

  window.open(url)
}

export default sendWhatsApp
