import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactForm, ContactInput, ContactSubmitButton, ContactTextArea, ContactWrapper } from '../style/Contact.style';
import ENV from "../config.json";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(ENV.SERVICE_ID, ENV.TEMPLATE_ID, form.current, ENV.PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              console.log("Message successfully sent");
          }, (error) => {
              console.log(error.text);
              console.log("Message failed to send");
          });
    };

    return (
        <>
            <ContactWrapper>
                <ContactForm ref={form} onSubmit={sendEmail}>
                    <h2>Contact me!</h2>
                    <ContactInput type="text" name="user_name" id="user_name" placeholder="Name" required></ContactInput>
                    <ContactInput type="email" name="user_email" id="user_email" placeholder="Email" required></ContactInput>
                    <ContactInput type="text" name="user_phone" id="user_phone" placeholder="Phone Number" required></ContactInput>
                    <ContactTextArea id="message" name="message" rows="10" placeholder="Message"></ContactTextArea>
                    <ContactSubmitButton type="submit">Send!</ContactSubmitButton>
                </ContactForm>
            </ContactWrapper>
        </>
    )
};

export default Contact;