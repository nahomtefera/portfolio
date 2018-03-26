import React, { Component } from 'react';
import Modal from 'react-modal';
import FontAwesome from 'react-fontawesome';
import './featuredWork.css';

Modal.setAppElement('#root')


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
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "San Francisco Coffee Shop Finder",
                    db_title: "sfcoffeeshopfinder",
                    description: "This web app connects to Foursquare API to get a list of the Coffee Shops in San Francisco with the best ratings and displays them on a map, powered by Google Maps API.",
                    mockup: require('../../images/videos/mockupvideos/sfcoffeefinder.mp4'),
                    thumbnail: require('../../images/mockups/sfcoffeefinder.png'),
                    images: [require("../../images/videos/todoapp.mp4")],
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
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Todo App with Firebase",
                    db_title: "todoapp",
                    description: "",
                    mockup: require('../../images/videos/mockupvideos/todoapp.mp4'),
                    thumbnail: require('../../images/mockups/todoapp.png'),
                    images: [],
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
                    modalIsOpen: false,
                },  
          ]
        };
    
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.playVideo = this.playVideo.bind(this);
      }

    componentDidMount(){
        setTimeout(function () {
            for (var ref in this.refs) {
                this.refs[ref].click();
            }
        }, 1000);

    }

    openModal(event) {
        let prevState = this.state.projects;

        for(var i = 0; i<prevState.length; i++){
            if(event.target.id == prevState[i].id){
                prevState[i].modalIsOpen = true;
            }
        }

        this.setState({
            modalIsOpen: true,
            projects: prevState
        })
    }

    playVideo(event) {
        let video = event.target;
        
        video.play()
        console.log("click event was fired: ", video);
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
                    {this.state.projects.map(project=>{
                        return(
                            <video key={Math.random()} loop="loop" className="mockup-img" onClick={this.playVideo} ref={"mockup_gif_"+project.db_title}> 
                                <source src={project.mockup} type="video/mp4"/>
                            </video>
                        )
                    })}
                </div>

                {this.state.projects.map(project=>{
                    return(
                        <div  className="modals-container">
                            <Modal
                                id={project.id}
                                key={project.id}
                                isOpen={project.modalIsOpen}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                            
                                <FontAwesome 
                                    className="close-modal-icon" 
                                    onClick={this.closeModal}
                                    name='times'
                                    size='2x'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />      
                                <h2 className="modal-title">{project.title}</h2>
                                
                                <div className="all-images-container">
                                    <div className="all-images">
                                        <div className="all-images-scroll-container">
                                            {project.images.map(picture => {
                                                return (
                                                    <div className="project-images-container">
                                                        <img className="project-images" src={picture} />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="modal-description">{project.description}</div>

                            </Modal>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FeaturedWork;