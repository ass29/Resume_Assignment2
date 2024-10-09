import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <div className="title-container">
                <div className="name-role-container">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.jobPosition}</p>
                </div>
                <div className="contact-info-container">
                    <p> Email: <a href="#">{this.props.email}</a></p>
                    <p>Web: {this.props.websiteUrl}</p>
                    <p>Mobile: {this.props.phoneNumber}</p>
                </div>
            </div>
        );
    }
}

export default Header;