import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a3958d79-43f3-4c73-9f67-b2f55c8540de");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();

      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact' id='contact'>
     <div className='contact-col'>
        <h3>Send me a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find my contact information below. Your feedback, questions, and suggestions are important to me as I strive to provide exceptional service to my students.</p>
        <ul>
            <li> <img src={mail_icon} alt="" />info@teacher.com</li>
            <li> <img src={phone_icon} alt="" />+38-099-999-00-99</li>
            <li><img src={location_icon} alt="" />Crimea</li>
           
        </ul>
     </div>
     <div className='contact-col'>
        <form onSubmit={onSubmit} >
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name'
            required/>
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your message here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
     </div>
        </div>
  )
}

export default Contact