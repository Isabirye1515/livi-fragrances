import React from 'react'
import imageM  from "../assets/attachments/m.jpg"
import HeroSection from './HeroSection';
import { Button } from '@carbon/react'
import About from './About';
export default function Home() {
  return (
    <div  >
      <img src={imageM}  height="40%" width="100%"  alt='head image' style={{objectFit:"cover"}} />
    </div>
  )
}
   