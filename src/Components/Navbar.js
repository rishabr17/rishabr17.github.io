import React, { Component } from 'react'

class Navbar extends Component {
    render(){
        return(
            <div className="navbar-menu">
                <div className="navbar-sticky">
                    <a className="navbar-listitem">Home</a>
                    <a className="navbar-listitem"> Education</a>
                    <a className="navbar-listitem">Skills</a>
                    <a className="navbar-listitem">Experience</a>
                    <a className="navbar-listitem">Projects</a>
                    <a className="navbar-lastitem">Contact</a>
                </div>
            </div>
        )
    }
}

export default Navbar