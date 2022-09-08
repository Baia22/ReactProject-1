import React from 'react'
import Contactform from '../Contactform';
import "../Contactform.css"


function Contact () {
  return ( 
    <>
    <div className='mapContact'>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23821.681873290123!2d44.7807488!3d41.7267712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472b82b6f835d%3A0x13d9fb6a0fac64e2!2sM%2FS%20Nadzaladevi!5e0!3m2!1sen!2sge!4v1662589849882!5m2!1sen!2sge"  allowFullScreen="" aria-hidden="false" tabIndex="0"   frameBorder="0" title='map'/>

      <div style={{width:700 , height:300 , backgroundColor:"#83c5be", borderRadius:"10px", padding:15}}>
          <h3>Contact Us :</h3>
          <h3>General Customer Care & Technical Support </h3>
          <h5>From the T-Mobile app, on a T-Mobile phone
          From your T-Mobile phone: 611
          Call: 1-800-937-8997
          If you are calling about a technical issue with your T-Mobile service, please call from a different phone so that we can troubleshoot with you.</h5>
          <h4 style={{display:"flex", justifyContent:"center"}}>eMail  : example@gmail.com</h4>

      </div>
    </div>
    <Contactform />
  </>
  )
}
export default Contact;