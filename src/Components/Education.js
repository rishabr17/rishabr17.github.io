import React, { Component } from 'react'

class Education extends Component {
    render(){
        return(
            <div id="education" style={{paddingBottom:"10vh", paddingTop:"60px", borderBottom:"solid 0.5px gray", marginRight:"5%"}} className="education-container">
                <h2 style={{fontWeight:"400", fontSize:"250%", paddingTop:"5vh", margin:"0px"}}>Education</h2>
                <h3 style={{fontWeight:"400", fontSize:"150%", paddingTop:"2.5%", textIndent:"2.5%", margin:"0px"}}>Rutgers University - New Brunswick</h3>
                <p style={{fontWeight:"300", fontSize:"110%", paddingTop:"1.5%", textIndent:"2.5%", margin:"0px"}}>Bachelors of Science in Computer Engineering</p> 
                <p style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", textIndent:"2.5%", margin:"0px"}}>Bachelors of Science in Computer Science</p> 
                <p style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", textIndent:"2.5%", margin:"0px"}}>Sep 2017 - May 2021</p> 
                <ul>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Data Structures</li>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Design and Analysis of Computer Algorithms</li>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Computer Architecture</li>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Systems Programming</li>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Software Engineering</li>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Discrete Math 1 &amp; 2</li>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Calculus 1 &amp; 2</li>
                    <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%"}}>Multivariable Calculus &amp; Differential Equations</li>
                </ul>
            </div>
        )
    }
}

export default Education