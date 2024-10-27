import React from 'react'
import imageHero from "../assets/attachments/z.webp"
import About from './About'
export default function HeroSection() {
  return (
    <div class="container" >
      <img src={imageHero} height="50%" width="100%" alt="image hero" />
      <br />
      <About />
    </div>
  )
}
