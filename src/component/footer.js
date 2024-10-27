import React from 'react'
import footerImg from "../assets/attachments/n.jpg"
export default function Footer() {
  return (
    <div  class="bg-secondary" >
      <img src={footerImg} height={400} width="100%" alt='footer image'  style={{objectFit:"cover"}} />
    </div>
  )
}
