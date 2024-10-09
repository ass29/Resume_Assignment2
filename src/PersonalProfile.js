import React, {Component} from "react";

class PersonalProfile extends Component {
    render() {
        return (
            <div className="person-profile-container">
                <div className="person-profile-header-container">
                    <h2 className="description-title">Personal Profile</h2>
                </div>
                <div className="description-header-content">
                    <p>{this.props.personalProfileSummary}</p>
                </div>
            </div>
        );
    }
}

export default PersonalProfile;