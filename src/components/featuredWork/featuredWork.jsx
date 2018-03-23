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
                    description: "",
                    images: [],
                    mockup: require('../../images/mockups/bravoresume.png'),
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "San Francisco Coffee Shop Finder",
                    description: "",
                    mockup: require('../../images/mockups/sfcoffeefinder.png'),
                    images: [],
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Textiles Europeos",
                    description: "",
                    mockup: require('../../images/mockups/sfcoffeefinder.png'),
                    images: [],
                    modalIsOpen: false,
                },
                {
                    id: Math.random(),
                    title: "Made in Peru Journal",
                    description: "",
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
                    description: "",
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
                                <div>I am a modal</div>

                            </Modal>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FeaturedWork;