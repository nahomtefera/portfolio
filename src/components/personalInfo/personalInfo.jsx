import React, { Component } from 'react';
import './personalInfo.css';
import FontAwesome from 'react-fontawesome';


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
                    <p className="personal-info-description">
                    I love crafting clean, well-written and responsive web applications. I started building websites when I was 14, I enjoyed posting tutorials on graphic design, photoshop, video games, and anything technology related. I decided to become a Front End developer because of the huge impact that online applications have in shaping society and improving our lives, that’s why I'm currently looking for opportunities to work in a company that wants to keep shaping the world.
                    </p>
                </div>
                <div className="show-work-exp">
                    <span onClick={()=>{this.props.showWorkExp()}}>Work experience</span>
                </div>

                <div className={this.state.nav[1].visible + " personal-info-contact"}>
                    <ul className="personal-info-contact-list">
                        <li>
                            <div className="list-container">
                                <div className="list-item-name">name</div>
                                <div className="list-item-value"> Nahom Endale</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-container">
                                <div className="list-item-name">address</div>
                                <div className="list-item-value">San Francisco, CA 94109</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-container">
                                <div className="list-item-name">github</div>
                                <div className="list-item-value">
                                    <a target="_blank" href="https://github.com/nahomtefera">github.com/nahomtefera</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-container">
                                <div className="list-item-name">linkedin</div>
                                <div className="list-item-value">
                                    <a target="_blank" href="https://www.linkedin.com/in/nahomendale/">/in/nahomendale</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="personal-info-nav">
                                <FontAwesome 
                                    id='1' className="personal-info-nav-icon" 
                                    onClick={this.toggle} 
                                    key="1"
                                    name='angle-left'
                                    size='2x'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />

                                <FontAwesome 
                                    id="2" className="personal-info-nav-icon" 
                                    onClick={this.toggle} 
                                    key="2"
                                    name='angle-right'
                                    size='2x'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                </div>
            </div>
        )
    }
}

export default PersonalInfo;