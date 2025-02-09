import { useState } from 'react'
import './ContactForm.css'

export const ContactForm = () => {
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [confirmation, setConfirmation] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail('');
        setMessage('');
        setConfirmation("Message has been sent!");

        setTimeout(() => {
            setConfirmation('');
        }, 3000);
    }
    return(
        <div className="formContainer">
            <h1>Contact us</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='inputContainer'>
                <label htmlFor="">Email</label>
                <input className='emailField' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  required/>    
                </div>
                <div className='inputContainer'>
                <label htmlFor="">Message</label>
                <textarea  type="text" placeholder='Write your message' value={message} onChange={(e) => setMessage(e.target.value)}  required/>    
                </div>
                <button type='submit'>Submit</button>
                <p className='confirmation'>{confirmation}</p>
            </form>            
        </div>
    )
}