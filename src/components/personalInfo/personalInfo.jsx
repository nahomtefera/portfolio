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
                    <p className="personal-info-description">I'm a Front End Developer nanodegree graduate from Udacity. I'm looking for opportunities to expand my desing capabilities and programming knowleadge while supporting an organization to the best of my abilities.</p>
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
                                <div className="list-item-name">email</div>
                                <div className="list-item-value"> nahumtefera@gmail.com</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-container">
                                <div className="list-item-name">phone</div>
                                <div className="list-item-value"> +1 (702)-945-5395</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-container">
                                <div className="list-item-name">github</div>
                                <div className="list-item-value">github.com/nahomtefera</div>
                            </div>
                        </li>
                        <li>
                            <div className="list-container">
                                <div className="list-item-name">linkedin</div>
                                <div className="list-item-value">linkedin.com/in/nahomendale</div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="personal-info-nav">
                        {this.state.nav.map(info=>{
                            return(
                                <FontAwesome 
                                    id={info.key} className="personal-info-nav-icon" 
                                    onClick={this.toggle} 
                                    key={info.key}
                                    name='angle-right'
                                    size='2x'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default PersonalInfo;