import React, { Component } from 'react';
import Modal from 'react-modal';
import './featuredWork.css';

Modal.setAppElement('#root')


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
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
                    description: "Bravoresume is a web app that I created that help users to create and download customized resumes. It was built on React and pdfMake.",
                    images: require("../../images/videos/coffeeshop.mp4"),
                    mockup: require('../../images/mockups/bravoresume.png'),
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "San Francisco Coffee Shop Finder",
                    description: "This web app connects to Foursquare API to get a list of the Coffee Shops in San Francisco with the best ratings and displays them on a map, powered by Google Maps API.",
                    mockup: require('../../images/mockups/sfcoffeefinder.png'),
                    images: require("../../images/videos/todoapp.mp4"),
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Textiles Europeos",
                    description: "I worked with a textile company in Spain to help them improve their UI. I wanted to give the website a cleaner appereance, update their old logos and icons and make it easier to navigate.",
                    mockup: require('../../images/mockups/textileseuropeos.png'),
                    images: [],
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Made in Peru Journal",
                    description: "I worked with a graphic designer to create the landing page of a journal that she created.",
                    mockup: require('../../images/mockups/madeinperujournal.png'),
                    images: [],
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "My First Portfolio",
                    description: "",
                    mockup: require('../../images/mockups/firstportfolio.png'),
                    images: [],
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Asana Tasks",
                    description: "This web app connects to Asana's API. It retrieves projects and apps.",
                    mockup: require('../../images/mockups/asanapp.png'),
                    images: [],
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Todo App with Firebase",
                    description: "",
                    mockup: require('../../images/mockups/todoapp.png'),
                    images: [],
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Design Studio",
                    description: "",
                    mockup: require('../../images/mockups/designstudio.png'),
                    images: [],
                    modalIsOpen: false,
                },  
          ]
        };
    
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
                            <img 
                            id={project.id} 
                            src={project.mockup}
                            className="mockup-img" 
                            alt="project mockkup" 
                            onClick={this.openModal} 
                        />
                        )
                    })}
                </div>

                {this.state.projects.map(project=>{
                    return(
                        <div className="modals-container">
                            <Modal
                                id={project.id}
                                key={project.id}
                                isOpen={project.modalIsOpen}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >

                                <h2 ref={subtitle => this.subtitle = subtitle}>{project.title}</h2>
                                <button onClick={this.closeModal}>close</button>
                                

                                <video autoplay="autoplay" loop="loop" width="400" height="300">
                                <source src={project.images} type="video/mp4" />
                                </video>

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