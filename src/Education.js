import React, {Component} from "react";

class Education extends Component {
    render() {
        return (
            <div className="education-container">
                <div className="education-header-container">
                    <h2 className="education-title">Education</h2>
                </div>

                <div className="education-exp-container">
                    {
                        this.props.education.map(item => (
                            <div className="exp-container">
                                <h4>{item.school}</h4>
                                <p>{item.degree}</p>
                                <p>{item.years}</p>
                                <p>{item.gpa}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        );
    }
}

export default Education;