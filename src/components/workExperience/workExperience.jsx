import React, { Component } from 'react';
import arrowBack from '../../images/icons/arrow-back.png';
import arrowForward from '../../images/icons/arrow-forward.png';
import './workExperience.css';


class WorkExperience extends Component {

    render() {
        return (
            <div className="work-experience-container">
                <div className="left-arrow arrow-icon-container">
                    <img className="arrow-icon" src={arrowBack} alt="arrow Back"/>
                </div>

                <div className="work-list">
                    First work exp
                </div>

                <div className="right-arrow arrow-icon-container">
                    <img className="arrow-icon" src={arrowForward} alt="arrow Forward"/>
                </div>
            </div>
        )
    }
}

export default WorkExperience;