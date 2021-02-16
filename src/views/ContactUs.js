import React from 'react';
import { email, phone } from '../App.js';
const waysToContact = "Hello! If you would like to get in touch with us, please fill out the form below. We will get back to you as soon as possible. Alternatively, you can call or stop by in person.";
class ContactUs extends React.Component {
    render() {
        return (
            <div  className="page-container" id="contact-us-container">
                <h1 className="page-title" id="contact-us-title">Contact Us</h1>
                        <p className="ways-to-contact">{waysToContact}</p>

                <div id="form-section-container">
                    <form id="contact-form">
                        <div id="form-inner-contact"> 
                            <p>{email}</p>
                            <p>{phone}</p>
                        </div>
                        {/* <label className="contact-form-label" for="first-name">First Name</label> */}
                        <input className="contact-form-input" type="text" id="first-name" name="first-name" placeholder="First Name" required />
                        {/* <label className="contact-form-label" for="last-name">Last Name</label> */}
                        <input className="contact-form-input" type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                        {/* <label className="contact-form-label" for="email">Email</label> */}
                        <input className="contact-form-input" type="email" id="email" name="email" placeholder="Email"required />
                        {/* <label className="contact-form-label" for="reason">Reason for Contact</label> */}
                        <select className="contact-form-input" id="reason-for-contact" name="reason">
                            <option id="reason-placeholder" value="" disabled selected hidden>Reason for Contact</option>
                            <option value="work">I am interested in working with you.</option>
                            <option value="customer">I have customer feedback.</option>
                            <option value="other">Other</option>
                        </select>
                        {/* <label for="message">Message</label> */}
                        <input className="contact-form-input" type="textarea" id="contact-message" name="message" placeholder="Enter your message here" required />
                        <button id="contact-form-button">Contact Us</button>
                    </form>
                </div>
 
            </div>
        )
    }
}

export default ContactUs;