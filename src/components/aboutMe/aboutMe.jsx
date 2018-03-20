import React, { Component } from 'react';
import WorkExperience from '../workExperience/workExperience';
import './aboutMe.css';


class AboutMe extends Component {

    render() {
        return (
            <div className="about-me-container">
                <WorkExperience />
            </div>
        )
    }
}

export default AboutMe;