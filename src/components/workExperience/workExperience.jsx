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
                    description: ["Implemented validation tools to capture errors in data collection materials with JavaScript, HTML5, and, CSS3, reducing over 60% of errors and improving communication between support engineers and data technicians.", "Collaborated with program managers to develop new protocols by creating more than 80 Confluence pages to document new data collection processes.", "Worked abroad in 2 international data collection projects, running over 350 complete sessions, and training and monitoring participants, handling logistics and securing testing."]
                },
                {
                    key: 2,
                    title: "UI Developer",
                    company: "Textiles Europeos, Freelancer",
                    date: "Feb-2017 / August-2017",
                    visible: false,
                    description: ["Designed and updated e-commerce platform to deliver Web 2.0 UI, responsive across 5+ major devices and browsers with JavaScript, HTML5, and CSS3, optimizing user navigation speed by at least 60%.", "Programmed and debug previous PHP codebase and optimized SQL queries to improve performance by 20%.","Fixed and organized previous PHP spaghetti script.", "Implemented click and hover animations and dynamic functionalities with CSS3, jQuery and jQuery UI."]
                },
                {
                    key: 3,
                    title: "Maps Quality Analyst",
                    company: "Apple via Welocalize",
                    date: "August-2016 / April-2017",
                    visible: false,
                    description: ["Performed deep analysis on 15,000+ maps results, spotting recurring errors and devising resolution strategies. Performed localization testing for Spanish market, using Quip to translate and localize user queries, translating over 1,000 voice commands" ," Evaluated data and algorithm performance for Apple Maps Metrics team, using local knowledge of Spain to determine accuracy of results Apple Maps displayed to users."]
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
                                    {job.description.map((item, index)=>{
                                        return <li key={index} className="job-bullet-points"> {item} </li>
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                    <div className="work-nav">
                        {this.state.jobs.map((job,index)=>{
                            return(
                                <FontAwesome
                                    name='briefcase'
                                    key={index}
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