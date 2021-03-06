import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import FontAwesome from 'react-fontawesome';
import './featuredWork.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      maxWidth              : "85%",
      width                 : "740px",
      overflow              : "hidden"
    }
  };
  


class FeaturedWork extends Component {
    
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false,
          projects: [
                {
                    id: Math.random(),
                    title: "Bravoresume",
                    db_title: "bravoresume",
                    description: "Bravoresume is a web app that I created that help users to create and download customized resumes. It was built on React and pdfMake.",
                    images: [require("../../images/featuredWork/bravo/bravo-mobile.png")],
                    mockup: require('../../images/videos/mockupvideos/bravoresume.mp4'),
                    thumbnail: require('../../images/mockups/bravoresume.png'),
                    url:"http://www.bravoresume.com",
                    target:"_blank",
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "SF Coffee Shop Finder",
                    db_title: "sfcoffeeshopfinder",
                    description: "This web app connects to Foursquare API to get a list of the Coffee Shops in San Francisco with the best ratings and displays them on a map, powered by Google Maps API.",
                    mockup: require('../../images/videos/mockupvideos/sfcoffeefinder.mp4'),
                    thumbnail: require('../../images/mockups/sfcoffeefinder.png'),
                    images: [require("../../images/videos/todoapp.mp4")],
                    url:"",
                    target:"",
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Textiles Europeos",
                    db_title: "textileseuropeos",
                    description: "I worked with a textile company in Spain to help them improve their UI. I wanted to give the website a cleaner appereance, update their old logos and icons and make it easier to navigate.",
                    mockup: require('../../images/videos/mockupvideos/textileseuropeos.mp4'),
                    thumbnail: require('../../images/mockups/textileseuropeos.png'),
                    images: [],
                    url:"http://www.textileseuropeos.com/catalogo_dev1.php",
                    target:"_blank",
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "To Do App with Firebase",
                    db_title: "todoapp",
                    description: "",
                    mockup: require('../../images/videos/mockupvideos/todoapp.mp4'),
                    thumbnail: require('../../images/mockups/todoapp.png'),
                    images: [],
                    url:"",
                    target:"",
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Design Studio",
                    db_title: "designstudio",
                    description: "",
                    mockup: require('../../images/videos/mockupvideos/designstudio.mp4'),
                    thumbnail: require('../../images/mockups/designstudio.png'),
                    images: [],
                    url:"",
                    target:"",
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Asana Tasks",
                    db_title: "asanapp",
                    description: "This web app connects to Asana's API. It retrieves projects and apps.",
                    mockup: require('../../images/videos/mockupvideos/asanapp.mp4'),
                    thumbnail: require('../../images/mockups/asanapp.png'),
                    images: [],
                    url:"",
                    target:"",
                    modalIsOpen: false,
                },  
                {
                    id: Math.random(),
                    title: "Made in Peru Journal",
                    db_title: "madeinperujournal",
                    description: "I worked with a graphic designer to create the landing page of a journal that she created.",
                    mockup: require('../../images/videos/mockupvideos/madeinperujournal.mp4'),
                    thumbnail: require('../../images/mockups/madeinperujournal.png'),
                    images: [],
                    url:"",
                    target:"",
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "My First Portfolio",
                    db_title: "portfoliotemplate",
                    description: "",
                    mockup: require('../../images/videos/mockupvideos/portfoliotemplate.mp4'),
                    thumbnail: require('../../images/mockups/firstportfolio.png'),
                    images: [],
                    url:"",
                    target:"",
                    modalIsOpen: false,
                },

          ]
        };
    
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.playVideo = this.playVideo.bind(this);
      }

    componentDidMount(){
        for (var ref in this.refs) {
            this.refs[ref].el.click();        
        }

        setTimeout(()=>{
            for (var ref in this.refs) {
                this.refs[ref].el.click();
            }
        }, 3000);

    }

    openModal(event) {
        let prevState = this.state.projects;

        for(var i = 0; i<prevState.length; i++){
            if(event.target.id === prevState[i].id){
                prevState[i].modalIsOpen = true;
            }
        }
    }

    playVideo(event) {
        let video = event.currentTarget;
        
        video.play()
    }

    closeModal() {
        let prevState = this.state.projects;

        for(var i=0; i < prevState.length; i++) {
            prevState[i].modalIsOpen = false;
        }

        this.setState({
            projects: prevState
        })
    }

    render() {
        return (
            <div className="featured-work-container">
                <h3 className="featured-work-title">featured work</h3>
                <div className="featured-work">
                    {this.state.projects.map((project, index)=>{
                        return(
                            <div key={index} className="featured-work-item-container">
                                <Video autoPlay 
                                    playsInline
                                    preload="true"
                                    poster={project.thumbnail}
                                    loop="loop"
                                    muted
                                    key={Math.random()} 
                                    className="mockup-img" 
                                    src={project.mockup}
                                    onClick={this.playVideo} 
                                    ref={"mockup_gif_"+project.db_title}
                                    > 
                                </Video>
                                <h2 className="featured-work-item-title">
                                    {project.url != ""
                                        ? <a target={project.target} href={project.url}>{project.title}</a>
                                        : <span target={project.target}>{project.title}</span>
                                    }
                                </h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FeaturedWork;