import { Accordion, AccordionItem, Button, Form, TextArea, TextInput, RadioButtonGroup, RadioButton } from '@carbon/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",  // Simplified to a single string value
    comment: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleGenderChange = (value) => {
    setData((prevData) => ({ ...prevData, gender: value }))
  }

  const Purfumes = async (data) => {
    try {
      const response = await fetch("https://email-server-rl3u.vercel.app/get-purfumes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          origin: "http://localhost:3000"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        console.log("Information handled and pushed successfully")
        setData({
          name: "",
          phone: "",
          email: "",
          gender: "",
          comment: ""
        })
      } else {
        console.log("There were problems pushing the information")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Purfumes(data)
    console.log(data)
  }

  return (
    <div className="container">
      <br/><br/>
      <center>
<div class="bg-dark fw-bold text-secondary p-5 rounded" > Here Order For Fragrances In Comment Section. </div>
</center>
      <br/><br/>

      <Accordion title="Contact Information">
        <AccordionItem title="Here is CEO Info for Further Knowledge">
         CEO's Name is: Olivia Namigade<br/>
          From: UGANDA<br/>
          Phone Number: +256781794216<br/>
        </AccordionItem>
      </Accordion>

      <br/><br/>
      <div class="bg-white shadow p-4" >
        <center>
      <div class="bg-success fw-bolder text-white p-1 rounded" h-2 > Make Your Order for Fragrances </div>
      </center>
      <br /><br />

      <Form onSubmit={handleSubmit}   >
        <TextInput 
          id="name" 
          labelText="Your Name" 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          value={data.name}
          onChange={handleChange} 
        /> <br/><br/>

        <TextInput 
          id="phone" 
          labelText="Phone Number" 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          required 
          onChange={handleChange} 
          value={data.phone}
        /> <br/><br/>

        <TextInput 
          id="email" 
          labelText="Email" 
          type="email" 
          name="email" 
          value={data.email}
          placeholder="Enter your Email" 
          onChange={handleChange} 
        /> <br/><br/>

        <RadioButtonGroup
          legendText="Gender"
          name="gender"
          valueSelected={data.gender}
          onChange={handleGenderChange}  // Directly setting the gender value here
          orientation="vertical"
        >
          <RadioButton 
            id="male" 
            labelText="Male" 
            value="male" 
          />
          <RadioButton 
            id="female" 
            labelText="Female" 
            value="female" 
          />
        </RadioButtonGroup>
        <br/><br/>

        <TextArea 
          id="comment" 
          labelText="Comment" 
          name="comment" 
          placeholder="Place a comment" 
          required 
          value={data.comment}
          onChange={handleChange} 
        /> <br/><br/>

        <Button type="submit">Submit</Button>
      </Form>
      </div>
      <br/><br/>

      <Link to="/">
        <Button>BACK</Button>
      </Link>
      <br /><br />
    </div>
  )
}
