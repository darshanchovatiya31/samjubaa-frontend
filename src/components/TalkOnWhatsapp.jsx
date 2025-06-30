import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const TalkOnWhatsapp = () => {
  return (
    <>
    <a
      href="https://wa.me/9725936585?text=Hello, I am interested in your sarees. Could you please share more details?"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon"/>
    </a>
    </>
  )
}

export default TalkOnWhatsapp