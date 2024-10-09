import './App.css';
import React, {Component} from "react";
import Header from "./Header";
import PersonalProfile from "./PersonalProfile";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Zh Rimel",
            jobPosition: "Data Scientist",
            email: "abc@gmail.com",
            websiteUrl: "abc.github.io/abc",
            phoneNumber: "01234567890",
            personalProfileSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            jobs: [
                {title: "Job Title at Company (August 2022 – December 2023)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {title: "Job Title 2 at Company 2 (August 2020 – December 2021)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            ],
            skills: [
                ["A Key Skill", "A Key Skill", "A Key Skill"],
                ["A Key Skill", "A Key Skill", "A Key Skill"],
                ["A Key Skill", "A Key Skill", "A Key Skill"]
            ],
            education: [
                {school: "New Jersey Institute of Technology", degree: "BS in Computer Science", years: "2018-2022", gpa: "3.9"},
                {school: "New Jersey Institute of Technology", degree: "BS in Computer Science", years: "2018-2022", gpa: "3.9"}
            ]
        };
    }

    render() {
        return (
            <div className="main-container">
                <Header
                    name={this.state.name}
                    jobPosition={this.state.jobPosition}
                    email={this.state.email}
                    websiteUrl={this.state.websiteUrl}
                    phoneNumber={this.state.phoneNumber}
                />
                <PersonalProfile personalProfileSummary={this.state.personalProfileSummary}/>
                <WorkExperience jobs={this.state.jobs}/>
                <Skills skills={this.state.skills}/>
                <Education education={this.state.education}/>
            </div>
        );
    }
}

export default App;
