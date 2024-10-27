import React, { useState } from 'react';
import imagea from "../assets/attachments/a.jpg";
import imageb from "../assets/attachments/b.jpg";
import imagec from "../assets/attachments/c.jpg";
import imaged from "../assets/attachments/d.jpg";
import imagee from "../assets/attachments/e.jpg";
import imagef from "../assets/attachments/f.jpg";
import imageg from "../assets/attachments/g.jpg";
import imageh from "../assets/attachments/h.jpg";
import imagei from "../assets/attachments/i.jpg";
import imagej from "../assets/attachments/j.jpg";
import imagek from "../assets/attachments/k.jpg";
import imagel from "../assets/attachments/l.jpg";
import imagep from "../assets/attachments/p.jpg";
import imagesFile from "../assets/attachments/s.jpg"; // Renamed to avoid conflict
import imagev from "../assets/attachments/v.jpg";
import { Grid, Column,Button } from '@carbon/react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  // Renamed useState variable to avoid conflict
  const [galleryImages] = useState([
    { id: 1, src: imagea },
    { id: 2, src: imageb },
    { id: 3, src: imagec },
    { id: 4, src: imaged },
    { id: 5, src: imagee },
    { id: 6, src: imagef },
    { id: 7, src: imageg },
    { id: 8, src: imageh },
    { id: 9, src: imagei },
    { id: 10, src: imagej },
    { id: 11, src: imagek },
    { id: 12, src: imagel },
    { id: 14, src: imagep },
    { id: 15, src: imagesFile }, // Updated to renamed import
    { id: 16, src: imagev },
  ]);

  return (
    <div class='container' >
      <Grid  >
        {galleryImages.map((image) => (
        <div  key={image} >

            <img src={image.src} alt={`Image ${image.id}`} height={1000} width={1000} style={{objectFit:"cover"}} class="rounded  img-fluid p-2" />
          
            </div>
        ))}
   
    </Grid>
    <br/><br/>
    <center>
    <Link to="/">
    <Button  type="round" >Home</Button>
    </Link>
    </center>
    <br/><br/>

    </div>
  );
}
