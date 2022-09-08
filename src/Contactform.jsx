import React from 'react'
import "./Contactform.css"

export default function Contactform() {
  return (
    <>
    <div style={{width:"100vw"}}>
        <form class="contact-from" action="" method="get" autocomplete="off" >
            <h3 class="title">Contact Form</h3>              

            <label>Name <span class="required">*</span></label>
            <input type="text" name="name" placeholder="Enter your name." required="required"  />
    
            <label>Email <span class="required">*</span></label>
            <input type="email" name="email" placeholder="Enter your email." required="required" />
    
            <label>Contact Number</label>
            <input type="text" name="contact" placeholder="Enter your contact number."  />

            <label>Message <span class="required">*</span></label>
            <textarea name="message" rows="4" placeholder="Enter your message." required="required"></textarea>
    
            <p class="submit"><input type="submit" name="submit" value="Submit" /> </p>
        </form>

    </div>
    </>
  )
}