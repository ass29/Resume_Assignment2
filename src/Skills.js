import React, {Component} from "react";

class Skills extends Component {
    render() {
        return (
            <div className="key-skills-container">
                <div className="key-skills-header-container">
                    <h2 className="key-skills-title">Key Skills</h2>
                </div>

                <div className="skill-lists-container">
                    {
                        this.props.skills.map(item => (
                            <div className="list-container">
                                <ul>
                                    {
                                        item.map(skill => (
                                            <li>{skill}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Skills;