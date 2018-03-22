import React, {Component} from 'react';
import './githubActivity.css';

var github = require('octonode');
var client = github.client();
var ghme = client.me();
var ghrepo;


class GithubActivity extends Component {

    // componentDidMount(){
    //     client.get('/users/nahomtefera/repos', {}, function (err, status, body, headers) {
    //         console.log(err)

    //         body.map(repo =>{
    //             console.log(repo)
    //             ghrepo = client.repo("nahomtefera/"+ repo.name);
                
    //             ghrepo.commits(function(err, data, header){
    //                 console.log(err);
    //                 console.log(data);
    //                 console.log(header);
                    
    //             })
    //         })
    //     });

    // }

    render() {
        return (
            <div className="chart-outer-container">
                <h3 className="github-chart-title">My Github activity</h3>
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
