import React from 'react';
const waysToContact = "Hello! If you would like to get in touch with us, please fill out the form below. We will get back to you as soon as possible. Alternatively, you can call or stop by in person.";
const googleMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.810062144788!2d-87.6415806!3d41.8539149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c5f1a646fbd%3A0x2cd8e0115b911ce4!2s2105%20S%20Jefferson%20St%2C%20Chicago%2C%20IL%2060616!5e0!3m2!1sen!2sus!4v1609863887796!5m2!1sen!2sus";


class ContactUs extends React.Component {
    render() {
        return (
            <div  className="page-container" id="contact-us-container">
                <div className="background-overlay"></div>
                <h1 className="page-title" id="contact-us-title">Contact Us</h1>
                        <p className="ways-to-contact">{waysToContact}</p>
                <div id="contact-form-container">
                    <form id="contact-form">
                        <input className="contact-form-input" type="text" id="first-name" name="first-name" placeholder="First Name" required />
                        <input className="contact-form-input" type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                        <input className="contact-form-input" type="email" id="email" name="email" placeholder="Email"required />
                        <select className="contact-form-input" id="reason-for-contact" name="reason">
                            <option id="reason-placeholder" defaultValue="reason-for-contact" disabled selected hidden>Reason for Contact</option>
                            <option className="contact-reason" value="work">Interest in Partnership</option>
                            <option className="contact-reason" value="customer">Customer Feedback</option>
                            <option className="contact-reason" value="other">Other</option>
                        </select>
                        <textarea className="contact-form-input" id="contact-message" name="message" placeholder="Enter your message here" required></textarea>
                        <button id="contact-form-button">Submit</button>
                        <iframe className="overlay-top" id="google-map" title="google-map" src={googleMapLink} width="350" height="250" frameBorder="0" style={{border:0}} allowFullScreen="" ariaHidden="false" tabIndex="0"></iframe>

                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUs;