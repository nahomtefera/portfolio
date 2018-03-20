import React, { Component } from 'react';
import arrowBack from '../../images/icons/arrow-back.png';
import arrowForward from '../../images/icons/arrow-forward.png';
import './workExperience.css';


class WorkExperience extends Component {

    constructor(props){
        super(props)

        this.state= {
            jobs: [ 
                {
                    key: 1,
                    title: "Data Collection Researcher",
                    company: "Amazon via Nytec",
                    date: "April-2017 / March-2018",
                    visible: true,
                    description: ["Implemented validation tools using HTML, CSS and Javascript to capture errors in data collection materials before sending them to support engineers.", "Collaborating with program managers to develop existing protocol for future data collection.", "Worked abroad in an international project for 3 months as a Data Collection Technician.", "Helped the data collection research team troubleshooting devices, network and hardware issues.",  "Managing data collection processes including securing testing materials, handling logistics, training and monitoring participants.", "Localization" ]
                },
                {
                    key: 2,
                    title: "Maps Quality Analyst",
                    company: "Apple via Welocalize",
                    date: "April-2017 / March-2018",
                    visible: false,
                    description: ["I have to ensure the quality of the results that a major Maps provider gives to users in Spain's market. My job is to do a research on the results given to the users and ensure that the information is correct." ,"Helped the data collection research team troubleshooting devices, network and hardware issues.",  "Managing data collection processes including securing testing materials, handling logistics, training and monitoring participants."]
                },
                {
                    key: 3,
                    title: "Technical Support",
                    company: "Playstation via SYKES",
                    date: "April-2017 / March-2018",
                    visible: false,
                    description: ["I've been working as Phone Agent, Chat Agent and Escalation Team Agent helping PlayStation consumers on different issues such as account recoveries, billing issues, hardware and networking issues, and more.","Helped the data collection research team troubleshooting devices, network and hardware issues.",  "Managing data collection processes including securing testing materials, handling logistics, training and monitoring participants."]
                }
            ]
        }

        this.showJob = this.showJob.bind(this);
    }

    showJob(event){
        let prevState = this.state.jobs;

        for(var i=0; i<prevState.length; i++){

            if(prevState[i].key == event.target.id) {
                prevState[i].visible = true;
            }else{
                prevState[i].visible = false;
            }
        }

        this.setState({
            jobs: prevState
        })
    }

    render() {
        return (
            <div className={this.props.className + " work-experience-container"}>
                {/* <div className="left-arrow arrow-icon-container">
                    <img className="arrow-icon" src={arrowBack} alt="arrow Back"/>
                </div> */}

                <div className="work-list">
                    {this.state.jobs.map(job=>{
                        return(
                            <div key={job.key} className={job.visible ? "job-container" : "job-container hide"}>
                                <h4 className="job-title">{job.title}</h4>
                                <br/>
                                <h4 className="job-company">{job.company}</h4>
                                <h4 className="job-date">{job.date}</h4>
                                <ul className="job-description">
                                    {job.description.map(item=>{
                                        return <li> {item} </li>
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                    <div className="work-nav">
                        {this.state.jobs.map(job=>{
                            return(
                                <span id={job.key} className="work-nav-icon" onClick={this.showJob} key={job.key}>○</span>
                            )
                        })}
                    </div>
                </div>


            </div>
        )
    }
}

export default WorkExperience;