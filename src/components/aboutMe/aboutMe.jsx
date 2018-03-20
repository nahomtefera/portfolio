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

        this.toggle = this.toggle.bind(this)
    }

    toggle(event){
        if(event.target.id === "personalInfo") {
            this.setState({
                personalInfo: {
                    visible: true
                },
                workExperience: {
                    visible: false
                }
            })
        } else {
            this.setState({
                personalInfo: {
                    visible: false
                },
                workExperience: {
                    visible: true
                }
            })
        }
    }

    render() {
        return (
            <div className="about-me-container">
                <div className="about-me-nav">
                    <ul className="about-me-list">
                        <li id="personalInfo" className={this.state.personalInfo.visible === true ? "about-me-active about-me-list-item" : "about-me-list-item"} onClick={this.toggle}>About Me</li>
                        <li id="workExperience" className={this.state.workExperience.visible === true ? "about-me-active about-me-list-item" : "about-me-list-item"} onClick={this.toggle}>Work Experience</li>
                    </ul>
                </div>
                <PersonalInfo className={this.state.personalInfo.visible === true ? "" : "hide"} />
                <WorkExperience className={this.state.workExperience.visible === true ? "" : "hide"} />
            </div>
        )
    }
}

export default AboutMe;