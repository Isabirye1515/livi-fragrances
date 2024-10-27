import { Accordion, AccordionItem, Button, Checkbox, Form, TextArea, TextInput } from '@carbon/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div class="container" >
         <br/><br/>
         <Accordion title="Contact Information">
            <AccordionItem title="Here is CEO Info for Further Knowledge">
                Our CEO's Name is: Olivia<br/>
                From: UGANDA<br/>
                Phone Number:+256781794216<br/>
            </AccordionItem>
         </Accordion>

        <br/><br/>
      <Form >
        <TextInput id="name" labelText="Your Name" type='text' name='name' placeholder='Your Name' required /> <br/><br/>
        <TextInput id="phone" labelText="Phone Number" type='tel' name='phone' placeholder='Phone Number' required /> <br/><br/>
        <TextInput id="email" labelText="Email" type='email' name='email' placeholder='Enter your Email' /> <br/><br/>
        <Checkbox id="male" labelText="Male" name='gender' value="male" /> <br/><br/>
        <Checkbox id="female" labelText="Female" name='gender' value="female" /> <br/><br/>
        <TextArea id="comment" labelText="Comment" name='comment' placeholder='Place a comment' required /> <br/><br/>
        <Button>Submit</Button>
      </Form>
      <br/><br/>
      <Link  to="/" >
      <Button>BACK</Button>
      </Link>
    </div>
  )
}
