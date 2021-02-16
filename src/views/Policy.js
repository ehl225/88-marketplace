import React from 'react';


export class Policy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             showPolicy: false,
             contentDisplay: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    
    handleClick() {
        this.setState(({ showPolicy : !(this.state.showPolicy) })
      , () => console.log(this.state.showPolicy));
      this.handleChange();
    }
        
    handleChange() {
        if (this.state.showPolicy) {
            this.setState({contentDisplay: this.props.chidren });
           } 
    }


    render() {
        return (
            <div className="policy-item" key={this.props.index}>
                <h3 className = "policy-title" key={this.props.index} id={this.props.index} onClick={this.handleClick}>{this.props.title}</h3>
                <div className="policy-content-container" key={`content-${this.props.index}`} id={`content-${this.props.index}`}>
                    <p key={`p1-${this.props.index}`}>{this.state.showPolicy ? this.props.content : ""}</p>
                    <p key={`p2-${this.props.index}`} className="policy-content-middle">{this.state.showPolicy ? this.props.contentMiddle : ""}</p>
                    <p key={`p3-${this.props.index}`}>{this.state.showPolicy ? this.props.contentEnd : ""}</p>
                </div>
            </div>
        )
    }
}

export default Policy;

// this.state.policies.map((policy, index) => { 
//     <div className="policy-item" key={index}>
//         <h2 className = "policy-title" key={index} id={index} onClick={this.handleChange}>{policy.title}</h2>
//         <div className="policy-content-container hide-for-mobile" id={`content-${index}`}>
//             <p className = "policy-content">{policy.content}</p>
//             <p className = "policy-content" id="policy-content-middle">{policy.contentMiddle}</p>
//             <p className = "policy-content">{policy.contentEnd}</p>
//         </div>
//     </div>
