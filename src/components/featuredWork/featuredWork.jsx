import React, { Component } from 'react';
import bravoresume from '../../images/mockups/bravoresume.png';
import sfcoffeefinder from '../../images/mockups/sfcoffeefinder.png';
import textileseuropeos from '../../images/mockups/textileseuropeos.png';
import madeinperujournal from '../../images/mockups/madeinperujournal.png';
import firstportfolio from '../../images/mockups/firstportfolio.png';
import asanapp from '../../images/mockups/asanapp.png';
import todoapp from '../../images/mockups/todoapp.png';
import designstudio from '../../images/mockups/designstudio.png';


import './featuredWork.css';


class FeaturedWork extends Component {

    render() {
        return (
            <div className="featured-work-container">
                <h3 className="featured-work-title">featured work</h3>
                <div className="featured-work">
                    <img src={bravoresume} className="mockup-img" alt="bravoresume mockup"/>
                    <img src={sfcoffeefinder} className="mockup-img" alt="bravoresume mockup"/>
                    <img src={textileseuropeos} className="mockup-img" alt="bravoresume mockup"/>
                    <img src={madeinperujournal} className="mockup-img" alt="bravoresume mockup"/>
                    <img src={firstportfolio} className="mockup-img" alt="bravoresume mockup"/>
                    <img src={asanapp} className="mockup-img" alt="bravoresume mockup"/>
                    <img src={todoapp} className="mockup-img" alt="bravoresume mockup"/>
                    <img src={designstudio} className="mockup-img" alt="bravoresume mockup"/>

                </div>
            </div>
        )
    }
}

export default FeaturedWork;