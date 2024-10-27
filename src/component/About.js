import React from 'react'
import aboutImg from "../";
import imagea from "../assets/attachments/b.webp"
import imageb from "../assets/attachments/a.webp"
import imagec from "../assets/attachments/c.webp"
import { Button, Column, Grid } from '@carbon/react';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div  class = "bg-dark rounded p-4 "  >
       <Grid  >
        <Column  lg={8}  md={4}  sm={4}    >
        <h1 class="h-1 text-white fw-bolder " bg-dark rounded > Elegant and Alluring </h1>
        <h2 class="text-success fw-bold" >Discover the Art of Pure Fragrance</h2>
        <h3  class="text-secondary fw-lighter" >Crafted from the finest essential oils, our perfumes captivate the senses with long-lasting, natural aromas. Experience the luxury of fragrance without compromise.</h3><br />
        <img src={imagec} height={300}  width="100%" alt="image one"  style={{objectFit:"cover"}} />
        <Link to="/contact" >
        <Button>Shop Now</Button> 
        </Link>
      <br />
        
        
        </Column>
        <Column  lg={8}  md={4}  sm={4}  >
        <h1 class="h-1 text-white fw-bolder  " bg-dark rounded > Luxury and Quality</h1>
        <h2  class="text-success fw-bold" >Unleash the Essence of True Luxury</h2>
        <h3  class="text-secondary fw-lighter">Handcrafted with natural oils for depth and longevity, our perfumes offer a sophisticated scent experience, perfect for any occasion.</h3><br />
        <img src={imagea} height={350}  width="100%" alt="image one"  style={{objectFit:"cover"}} />
        
        <Link  to="gallery" >
        <Button>Explore Collection</Button> 
        </Link>

        </Column>
       
       <Column  lg={8}  md={4}  sm={4}>
        <h1 class="h-1 text-white fw-bolder " bg-dark rounded > All-Natural and Pure Ingredients</h1>
        <h2  class="text-success fw-bold" >Pure, Potent, and Alluring</h2>
        <h3  class="text-secondary fw-lighter" >Our oil-based perfumes are crafted with only the purest ingredients, offering a clean, long-lasting scent that evolves throughout the day.</h3><br />
        <img src={imageb} height={300}  width="100%" alt="image one"  style={{objectFit:"cover"}} />
        <Link  to="/infor" >
        <Button>Why Chose Oil</Button><br />
        </Link>
        
        </Column>

        <Column  lg={8}  md={4}  sm={4}  >
        <h1 class="h-1 text-white fw-bolder " bg-dark rounded > Timeless and Classic Appeal</h1>
        <h2  class="text-success fw-bold"  >Perfume, Perfected by Nature</h2>
        <h3  class="text-secondary fw-lighter" >Dive into a world where timeless luxury meets pure, nature-inspired ingredients. Our oil perfumes are designed to linger and leave a lasting impression.</h3><br />
    
        <div  class="bg-primary rounded text-white p-4 fw-lighter " >  LIVI FRAGRANCES ARE THE BEST ON MARKET NOW </div>
        
        </Column>
       </Grid>
       
    </div>
  )
}
