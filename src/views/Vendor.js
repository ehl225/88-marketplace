import React from 'react'

export default class Vendor extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="vendor">
                <h2>{this.props.name}</h2>
                <img className="vendor-logo" src={this.props.logo} />
                <p>{this.props.description}</p>
                <a href={this.props.instagram} className="vendor-instagram"></a>
                <a href={this.props.facebook} className="vendor-facebook"></a>
            </div>
        )
    }
}
