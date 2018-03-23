import React, {Component} from 'react';
import './githubActivity.css';
import FontAwesome from 'react-fontawesome';



class GithubActivity extends Component {

    render() {
        return (
            <div className="chart-outer-container">
                <h3 className="github-chart-title">
                    My Github activity 
                    <FontAwesome 
                        id='' className="" 
                        onClick={this.toggle} 
                        key="1"
                        name='github'
                        size='2x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </h3>
                <div className="chart-inner-container">
                    <img className="chart-img" src="http://ghchart.rshah.org/006d99/nahomtefera" alt="nahom's Github chart" />
                    {/* 
                        Thanks to 2016rshah for this wonderful tool
                        https://github.com/2016rshah/githubchart-api
                    */}
                </div>
            </div>
        )
    }
}

export default GithubActivity;
