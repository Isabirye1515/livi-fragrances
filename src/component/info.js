import { Button } from '@carbon/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Info() {
    const [info] = useState(
        [
            {
              id: 1,
              title: "Longer-Lasting Scent",
              description: "Oil perfumes evaporate slowly, making the scent last throughout the day."
            },
            {
              id: 2,
              title: "Gentle on Skin",
              description: "Oil-based perfumes are typically less irritating and contain fewer chemicals, making them ideal for sensitive skin."
            },
            {
              id: 3,
              title: "Subtle, Personal Scent",
              description: "Oil perfumes release fragrance close to the skin, providing a more intimate scent."
            },
            {
              id: 4,
              title: "Rich, Pure Fragrance Profile",
              description: "Oils capture a truer fragrance without dilution, offering a natural scent experience."
            },
            {
              id: 5,
              title: "Hydrating for the Skin",
              description: "Many oil perfumes include moisturizing carrier oils like jojoba, which hydrate the skin."
            },
            {
              id: 6,
              title: "Eco-Friendly and Often Vegan",
              description: "Many oil perfumes are made with natural, cruelty-free ingredients and fewer synthetic chemicals."
            },
            {
              id: 7,
              title: "Highly Concentrated, So Less is More",
              description: "Oil perfumes are concentrated, requiring only a small amount for an effective scent."
            }
          ]
          
    )
  return (
    <div class="container  bg-dark rounded p-4 " >
        {info.map((inf)=>(
            <div key={inf.id} >
                <h1 class="fw-bold text-white bg-black rounded" >{inf.title}</h1>
                <h2 class="fw-lighter text-white" >{inf.description}</h2>

            </div>
        ))}
        <br/><br/>

<Link  to="/" >
      <Button  className='button' >BACK</Button>
      </Link>
      
    </div>
  )
}
