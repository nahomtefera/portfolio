import React, {Component} from 'react';
import './skillsChart.css';
import FontAwesome from 'react-fontawesome';

class SkillsChart extends Component {

    render() {
        return (
            <div className="skill-chart-container">
                    <div className="skill-item">
                        <FontAwesome 
                            className='skill-chart-icon'
                            name='code'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                    <div className="skill-title">Programming</div>
                    <div className="skill-values">Javascrip, HTML/CSS</div>
                </div>
                <div className="skill-item">
                        <FontAwesome 
                            className='skill-chart-icon'
                            name='server'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                    <div className="skill-title">Server Infrastructure</div>
                    <div className="skill-values">Firebase, Express, Mongodb</div>
                </div>
                <div className="skill-item">
                        <FontAwesome 
                            className='skill-chart-icon'
                            name='th-large'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                    <div className="skill-title">Software Applications</div>
                    <div className="skill-values">MS Office, Adobe CC</div>
                </div>
                <div className="skill-item">
                        <FontAwesome 
                            className='skill-chart-icon'
                            name='object-group'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                    <div className="skill-title">Design</div>
                    <div className="skill-values">Wireframe, Sketching</div>
                </div>
                <div className="skill-item">
                        <FontAwesome 
                            className='skill-chart-icon'
                            name='desktop'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />  
                    <div className="skill-title">Operating Systems</div>
                    <div className="skill-values">Microsoft, Mac OS, iOS</div>
                </div>
                <div className="skill-item">
                        <FontAwesome 
                            className='skill-chart-icon'
                            name='folder-open'
                            size='2x'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                    <div className="skill-title">Project Managment</div>
                    <div className="skill-values">Asana, Atlassian Jira, Salesforce, Github</div>
                </div>

            </div>
        )
    }
}

export default SkillsChart;