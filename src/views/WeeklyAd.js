import React from 'react';
import weekly_ad_02142021 from '../images/weekly_ads/weekly_ad_02142021.jpg';

const validDate = "2/05/2021-2/12/2021";

class WeeklyAd extends React.Component {
    render() {
        return (
            <div className="page-container"  id="weekly-ad-container">
                <h1 class="page-title" id="weekly-ad-title">Latest Savings</h1>
                <p className="page-subtitle" id="weekly-ad-subtitle">Prices Valid <span>{validDate}</span></p>
                <img  className="weekly-ad" src={weekly_ad_02142021} />
            </div>
        )
    }
}

export default WeeklyAd;