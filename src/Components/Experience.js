import React, { Component } from 'react'

class Experience extends Component {
    render(){
        return(
            <div id="experience" style={{height:"100vh", paddingTop:"60px", borderBottom:"solid 0.5px gray", marginRight:"5%"}} className="education-container">
                <h2 style={{fontWeight:"400", fontSize:"250%", paddingTop:"5vh", margin:"0px"}}>Experience</h2>
                <h3 style={{fontWeight:"400", fontSize:"150%", paddingTop:"2.5%", textIndent:"2.5%", margin:"0px"}}>Rutgers University - New Brunswick</h3>
                <p style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", textIndent:"2.5%", margin:"0px"}}>Sep 2017 - May 2021</p> 
                <ul>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Data Structures</li>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Design and Analysis of Computer Algorithms</li>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Computer Architecture</li>
                </ul>
            </div>
        )
    }
}

export default Experience