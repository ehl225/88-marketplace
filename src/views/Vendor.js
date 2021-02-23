import React from 'react';
// import instagram_logo from '../images/';
// import facebook_logo from '../images/';

export default class Vendor extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="vendor">
                <h2 className="vendor-name">{this.props.name}</h2>
                <a href={this.props.website} target="_blank"><img className="vendor-logo" src={this.props.logo} /></a>
                <p>{this.props.description}</p>
                <a href={this.props.instagram} target="_blank" className="vendor-instagram"><img className="vendor-instagram" src={this.props.instagramLogo}/></a>
                <a href={this.props.facebook} target="_blank" className="vendor-facebook"><img className="vendor-facebook" src={this.props.facebookLogo}/></a>
            </div>
        )
    }
}
