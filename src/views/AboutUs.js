import React from 'react';
import {address, email, phone, hours} from '../App.js';

const parking = "Lot and street parking are available for our guests.";
const about = "We are Chicago's largest Chinese Supermarket! At 88 Marketplace, we strive to nourish and enrich local and interstate communities by providing fresh and high-quality products at a great value, exceptional service, and committing ourselves in fostering the growth of our employees and communities.";
const googleMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.810062144788!2d-87.6415806!3d41.8539149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c5f1a646fbd%3A0x2cd8e0115b911ce4!2s2105%20S%20Jefferson%20St%2C%20Chicago%2C%20IL%2060616!5e0!3m2!1sen!2sus!4v1609863887796!5m2!1sen!2sus";

class AboutUs extends React.Component {
    render() {
        return (
            <div  className="page-container" id="about-us-container">
                <h1 className="page-title" id="about-us-title">About 88!</h1>
                <div className="page-info-container" >
                    <p className="page-info">{about}</p>
                </div>
                <div className="store-info" id="store-info-container">
                    <h2 className="store-info" id="store-info-title">Store Info</h2>
                    <p className="store-info" id="about-address">{address} <span id="second-floor">(second floor)</span></p>
                    <p className="store-info" id="about-parking">{parking}</p>
                    <p className="store-info" id="about-hours">{hours}</p>
                    <p className="store-info" id="about-email">{email}</p>
                    <p className="store-info" id="about-phone">{phone}</p>
                    <iframe id="google-map" title="google-map" src={googleMapLink} width="400" height="300" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
        )
    }
}

export default AboutUs;