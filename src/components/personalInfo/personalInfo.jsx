import React, { Component } from 'react';
import './personalInfo.css';


class PersonalInfo extends Component {

    constructor(props){
        super(props)

        this.state= {
            nav: [
                {
                    key: 1,
                    name: "personal-info-profile",
                    visible: "show"
                },
                {
                    key: 2,
                    name: "personal-info-contac",
                    visible: "hide"
                }
            ]
        }            

        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        let prevState = this.state.nav;
        for(var i=0; i<prevState.length; i++){
            if(prevState[i].key == event.target.id){
                prevState[i].visible = "show";
            } else {
                prevState[i].visible = "hide";
            }
        }

        this.setState({
            nav: prevState
        })
    }

    render() {
        return (
            <div className={this.props.className + " personal-info-container"}>
                <div className={this.state.nav[0].visible + " personal-info-profile"}>
                    <h4 className="personal-info-intro">Hello, I am <span className="personal-info-fullname">Nahom Endale</span> <br/> Front End Developer</h4>
                    
                    <p className="personal-info-description">I'm a Front End Developer nanodegree graduate. I'm looking for opportunities to expand my desing capabilities and programming knowleadge while supporting an organization to the best of my abilities.</p>
                </div>

                <div className={this.state.nav[0].visible + " personal-info-contact"}>
                    
                </div>

                <div className="personal-info-nav">
                        {this.state.nav.map(info=>{
                            return(
                                <span id={info.key} className="personal-info-nav-icon" onClick={this.toggle} key={info.key}>○</span>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default PersonalInfo;