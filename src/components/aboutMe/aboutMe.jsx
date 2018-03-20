import React, { Component } from 'react';
import PersonalInfo from '../personalInfo/personalInfo';
import WorkExperience from '../workExperience/workExperience';
import './aboutMe.css';


class AboutMe extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            personalInfo: {
                visible: true
            },
            workExperience: {
                visible: false
            }
        }
    }

    render() {
        return (
            <div className="about-me-container">
                <div className="about-me-nav">
                    <ul className="about-me-list">
                        <li className="about-me-list-item">About Me</li>
                        <li className="about-me-list-item">Work Experience</li>
                    </ul>
                </div>
                <PersonalInfo className={this.state.personalInfo.visible === true ? "" : "hide"} />
                <WorkExperience className={this.state.workExperience.visible === true ? "" : "hide"} />
            </div>
        )
    }
}

export default AboutMe;