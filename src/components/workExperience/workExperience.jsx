import React, { Component } from 'react';
import arrowBack from '../../images/icons/arrow-back.png';
import arrowForward from '../../images/icons/arrow-forward.png';
import FontAwesome from 'react-fontawesome';
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
                    description: ["Implemented validation tools using HTML, CSS and Javascript to capture errors in data collection materials before sending them to support engineers.", "Collaborating with program managers to develop existing protocol for future data collection.", "Managing data collection processes including securing testing materials, handling logistics, training and monitoring participants."]
                },
                {
                    key: 2,
                    title: "UI Developer",
                    company: "Textiles Europeos, Freelancer",
                    date: "Feb-2017 / August-2017",
                    visible: false,
                    description: ["Collaborated with team on implementing new features and UX in an Agile environment", "Made heavy use of Chrome Developer Tools + Firebug to ensure front-end code and assets were optimized and high-quality","Fixed and organized previous PHP spaghetti script.", "Working with browsers compatibility issues."]
                },
                {
                    key: 3,
                    title: "Maps Quality Analyst",
                    company: "Apple via Welocalize",
                    date: "August-2016 / April-2017",
                    visible: false,
                    description: ["Evaluation of data and algorithm performance for the Apple Maps Metrics team." ,"Monitoring and reporting defects encountered on daily tasks, collaborating with project/market leads and engineers to find solutions.", "Perform localization testing for Spanish market, working with different teams and project leads."]
                },
                {
                    key: 4,
                    title: "Technical Support",
                    company: "Playstation via SYKES",
                    date: "September-2015 / August-2016",
                    visible: false,
                    description: ["Provide thorough support and problem resolution for customers","Phone support and chat support for PlayStation users", "Helped on account recoveries, refund requests, hardware and networkig issues"]
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
                                <FontAwesome
                                    name='briefcase'
                                    size='2x'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} 
                                    id={job.key} 
                                    className={job.visible ? "active-work-nav-icon" : "work-nav-icon"} 
                                    onClick={this.showJob} 
                                    key={job.key}
                                />
                            )
                        })}
                    </div>
                </div>


            </div>
        )
    }
}

export default WorkExperience;