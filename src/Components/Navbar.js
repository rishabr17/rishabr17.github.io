import React, { Component } from 'react'

class Navbar extends Component {

    state={
        homeColor: "#FFEE58",
        educationColor:"",
        skillsColor: "",
        expColor: ""
    }

    listenScrollEvent = e => {
        if (window.scrollY < window.innerHeight*0.75) {
          this.setState({homeColor: '#FFEE58'})
          this.setState({educationColor: ''})
          this.setState({skillsColor: ''})
          this.setState({expColor: ''})
        } else if (window.scrollY < (window.innerHeight*1.75)) {
            this.setState({homeColor: ''})
            this.setState({educationColor: '#FFEE58'})
            this.setState({skillsColor: ''})
            this.setState({expColor: ''})
        } else if (window.scrollY < (window.innerHeight*2.75)) {
            this.setState({homeColor: ''})
            this.setState({educationColor: ''})
            this.setState({skillsColor: '#FFEE58'})
            this.setState({expColor: ''})
        } else if (window.scrollY < (window.innerHeight*3.75)) {
            this.setState({homeColor: ''})
            this.setState({educationColor: ''})
            this.setState({skillsColor: ''})
            this.setState({expColor: '#FFEE58'})
        }
      }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render(){
        return(
            <div className="navbar-menu">
                <div className="navbar-sticky">
                    <a href="#home" style={{backgroundColor:this.state.homeColor}} className="navbar-listitem">Home</a>
                    <a href="#education" style={{backgroundColor:this.state.educationColor}} className="navbar-listitem"> Education</a>
                    <a href="#skills" style={{backgroundColor:this.state.skillsColor}} className="navbar-listitem">Skills</a>
                    <a href="#experience" style={{backgroundColor:this.state.expColor}} className="navbar-listitem">Experience</a>
                    <a className="navbar-listitem">Projects</a>
                    <a className="navbar-lastitem">Contact</a>
                </div>
            </div>
        )
    }
}

export default Navbar