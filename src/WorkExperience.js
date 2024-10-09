import React, {Component} from "react";

class WorkExperience extends Component {
    render() {
        return (
            <div className="work-experience-container">
                <div className="work-experience-header-container">
                    <h2 className="description-title">Work Experience</h2>
                </div>
                <div className="work-experience-content-container">
                    {
                        this.props.jobs.map(job => (
                            <div className="job-container">
                                <h4>{job.title}</h4>
                                <p>{job.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default WorkExperience;