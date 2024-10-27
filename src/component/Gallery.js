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
import { Grid, Column } from '@carbon/react';

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
    <div>
      <Grid  >
        {galleryImages.map((image) => (
          <Column lg={4} md={2} sm={2}   class="col"key={image.id}  >
            <img src={image.src} alt={`Image ${image.id}`} height={250} width={250}  style={{objectFit:"cover"}} />
          </Column>
       
        ))}
   
    </Grid>
    </div>
  );
}
