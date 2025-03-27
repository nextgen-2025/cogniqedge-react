import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='form'>
        <form className='formContainer'>
            <div className="formGroup">
                <input type="text" id="name" placeholder="Enter your name..." />
                <input type="email" id="email" placeholder="Enter your email..." />
            </div>
            <div className="formGroup">
                <input type="text" id="subject" placeholder="Enter your subject..." />
            </div>  
            <div className="formGroup">
                <textarea id="message" placeholder="Enter your message..."></textarea>
            </div>
            <button className='bg-red-400 py-2 px-2 rounded-[5px]' type="submit">Send Message</button>
        </form>
    </div>
  )
}

export default Form;