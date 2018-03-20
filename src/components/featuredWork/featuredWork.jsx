import React, { Component } from 'react';
import bravoresume from '../../images/bravoresume.png';
import sfcoffeefinder from '../../images/sfcoffeefinder.png';
import textileseuropeos from '../../images/textileseuropeos.png';
import madeinperujournal from '../../images/madeinperujournal.png';
import firstportfolio from '../../images/firstportfolio.png';
import asanapp from '../../images/asanapp.png';
import todoapp from '../../images/todoapp.png';
import designstudio from '../../images/designstudio.png';


import './featuredWork.css';


class FeaturedWork extends Component {

    render() {
        return (
            <div className="featured-work-container">
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