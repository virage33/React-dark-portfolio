import React from 'react';
import './Contact.css';
import contactImg from "../img/about-9.jpg";

function Contact() {
    return (
        <div className='contact component__space' id='Contact'>
            <div className='row'>
                <div className='col__2'>
                    <div className='contact__box'>
                        <div className='contact__meta'>
                            <h1 className='hire__text'>Hire Me</h1>
                            <p className='hire__text white'>I am available for freelance work. Connect with me via phone:</p>
                            <p className='hire__text white'><strong>+234 8102627768</strong> or email <strong>suleiman.sani1@gmail.com</strong></p>    
                        </div>
                        <div className='input__box'>
                            <input type="text" className='contact name' placeholder='Your name *'/>
                            <input type="text" className='contact email' placeholder='Your Email *'/>
                            <input type="text" className='contact subject' placeholder='Write a subject *'/>
                            <textarea name="message" id="message" placeholder = "write your message"></textarea>
                            <button className='btn contact pointer' type='submit'>Submit</button>
                        </div>
                    </div>
                </div>

                <div className='col__2'>
                    <img src={contactImg} alt="" className="contact__img"/>
                    
                </div>

            </div>

            <div className='shape__divider'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,192L480,224L960,128L1440,288L1440,320L960,320L480,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

export default Contact
