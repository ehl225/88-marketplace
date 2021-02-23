import React from 'react';
import Vendor from './Vendor';
import _312fishmarket_logo from '../images/food_court_pictures/_312fishmarket_logo.png';
import bbqking_logo from '../images/food_court_pictures/bbqking_logo.png';
import chiuquonbakery_logo from '../images/food_court_pictures/chiuquonbakery_logo.png';
import cropculture_logo from '../images/food_court_pictures/cropculture_logo.png';
import dama_logo from '../images/food_court_pictures/dama_logo.png';
import coming_soon_logo from '../images/food_court_pictures/coming-soon-logo.png';

const vendors = [
    {
        name: "312 Fish Market",
        logo: _312fishmarket_logo,
        website: "https://312fishmarket.com/",
        instagram: "https://www.instagram.com/312fishmarket/",
        facebook: "https://www.facebook.com/312fishmarket",
    },
    {
        name: "B.B.Q King",
        logo: bbqking_logo,
        website: "http://www.bbqkingonline.com/",
        instagram: null,
        facebook: "https://www.facebook.com/pages/BBQ%20King%20House/113579742008458/",
    },
    {
        name: "Chiu Quon Bakery & Dim Sum",
        logo: chiuquonbakery_logo,
        description: "Chiu Quon Bakery is a legendary staple in Chicago's Chinatown neighborhood. Now, you can also find them inside of 88 Marketplace! Whether you're looking for buns, pastries, or cakes, Chiu Quon should hit the sweet spot.",
        website: "http://www.cqbakery.com/",
        instagram: "https://www.instagram.com/chiuquonbakery/",
        facebook: "https://www.facebook.com/cqbakery",
    },
    {
        name: "Crop Culture",
        logo: cropculture_logo,
        website: null,
        instagram: "https://www.instagram.com/drinkcropculture/",
        facebook: "https://www.facebook.com/Crop-Culture-104550768041781"
    },
    {
        name: "Dama",
        logo: dama_logo,
        website: null,
        instagram: "https://www.instagram.com/damaeats/",
        facebook: null
    },
    {
        name: "Fat Tiger",
        logo: coming_soon_logo,
        website: null,
        instagram: null,
        facebook: null
    }
    
];

class FoodCourt extends React.Component {
    render() {
        return (
            <div className="page-container" id="food-court-container">
                <h1 className="page-title">Satisfy Your Cravings</h1>
                <div id="vendor-list-container">
                {vendors.map((vendor, index) => {
                    return < Vendor key={index} name={vendor.name} logo={vendor.logo} website={vendor.website} instagram={vendor.instagram} facebook={vendor.facebook} />
                })}
                </div>
            </div>
        )
    }
}

export default FoodCourt;