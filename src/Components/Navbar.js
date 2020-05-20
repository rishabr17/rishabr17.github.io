import React, { Component } from 'react'

class Navbar extends Component {

    state={
        homeColor: "#FFEE58",
        educationColor:"",
        skillsColor: "",
        expColor: "",
        projectsColor: "",
        contactColor: ""
    }

    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        
      }

    listenScrollEvent = e => {
        if(document.getElementById("home") == null)
            return;
        if (window.scrollY < document.getElementById("home").clientHeight*0.85) {
            this.setState({homeColor: '#FFEE58'})
            this.setState({educationColor: ''})
            this.setState({skillsColor: ''})
            this.setState({expColor: ''})
            this.setState({projectsColor: ''})
            this.setState({contactColor: ''})
        } else if (window.scrollY < document.getElementById("home").clientHeight+document.getElementById("education").clientHeight*0.85) {
            this.setState({homeColor: ''})
            this.setState({educationColor: '#FFEE58'})
            this.setState({skillsColor: ''})
            this.setState({expColor: ''})
            this.setState({projectsColor: ''})
            this.setState({contactColor: ''})
        } else if (window.scrollY < document.getElementById("home").clientHeight+document.getElementById("education").clientHeight+document.getElementById("skills").clientHeight*0.85) {
            this.setState({homeColor: ''})
            this.setState({educationColor: ''})
            this.setState({skillsColor: '#FFEE58'})
            this.setState({expColor: ''})
            this.setState({projectsColor: ''})
            this.setState({contactColor: ''})
        } else if (window.scrollY < document.getElementById("home").clientHeight+document.getElementById("education").clientHeight+document.getElementById("skills").clientHeight+document.getElementById("experience").clientHeight*0.85) {
            this.setState({homeColor: ''})
            this.setState({educationColor: ''})
            this.setState({skillsColor: ''})
            this.setState({expColor: '#FFEE58'})
            this.setState({projectsColor: ''})
            this.setState({contactColor: ''})
        } else if (window.scrollY < document.getElementById("home").clientHeight+document.getElementById("education").clientHeight+document.getElementById("skills").clientHeight+document.getElementById("experience").clientHeight+document.getElementById("projects").clientHeight*0.25) {
            this.setState({homeColor: ''})
            this.setState({educationColor: ''})
            this.setState({skillsColor: ''})
            this.setState({expColor: ''})
            this.setState({projectsColor: '#FFEE58'})
            this.setState({contactColor: ''})
        } else if (window.scrollY < document.getElementById("home").clientHeight+document.getElementById("education").clientHeight+document.getElementById("skills").clientHeight+document.getElementById("experience").clientHeight+document.getElementById("projects").clientHeight+document.getElementById("contact").clientHeight*0.85) {
            this.setState({homeColor: ''})
            this.setState({educationColor: ''})
            this.setState({skillsColor: ''})
            this.setState({expColor: ''})
            this.setState({projectsColor: ''})
            this.setState({contactColor: '#FFEE58'})
        }
      }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render(){
        return(
            <div className="navbar-menu">
                <div className="navbar-sticky">
                    <a href="../#home" style={{backgroundColor:this.state.homeColor}} className="navbar-listitem">Home</a>
                    <a href="../#education" style={{backgroundColor:this.state.educationColor}} className="navbar-listitem"> Education</a>
                    <a href="../#skills" style={{backgroundColor:this.state.skillsColor}} className="navbar-listitem">Skills</a>
                    <a href="../#experience" style={{backgroundColor:this.state.expColor}} className="navbar-listitem">Experience</a>
                    <a href="../#projects" className="navbar-listitem" style={{backgroundColor:this.state.projectsColor}}>Projects</a>
                    <a href="../#contact" className="navbar-lastitem" style={{backgroundColor:this.state.contactColor}}>Contact</a>
                </div>
            </div>
        )
    }
}

export default Navbar