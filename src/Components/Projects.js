import React, { Component } from 'react'
import 'firebase/firestore'
import { db } from './Firebase'

class Projects extends Component {

    state = {
        projects: []
    }

    componentWillMount(){
        this.firebaseRetrieve();
    }

    firebaseRetrieve = () =>{
        db.collection("projects")
        .orderBy("Order", "desc")
        .get()
        .then(querySnapshot =>{
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({projects: data});
        })
    }

    parseHtml = (str) =>{
        if(str.charAt(0) != '<')
            return <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%", width:"60vw", lineHeight:"1.5em"}}>{str}</li>;
        
        return <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%", width:"60vw", lineHeight:"1.5em"}} dangerouslySetInnerHTML={{ __html: str }}></li>;
    }

    projectComponents = () =>{
        const elements = this.state.projects.map(r => (
            
            <div style={{paddingTop:"2.5%"}}>
                <a href={r.Link} style={{fontWeight:"400", fontSize:"150%", marginLeft:"2.5%",  cursor:"pointer"}}>{r.Name}</a>
                <p style={{fontWeight:"300", fontSize:"110%", paddingTop:"1%", textIndent:"2.5%", margin:"0px"}}>{r.Blurb}</p> 
                <ul>
                    {r.Description.map(d => (
                        this.parseHtml(d)
                    ))}
                </ul>
            </div>
        ))
        return <div>{elements}</div>;
    }

    render(){
        return(
            <div id="projects" style={{paddingBottom:"5%", paddingTop:"60px", borderBottom:"solid 0.5px gray", marginRight:"5%"}} className="education-container">
                <h2 style={{fontWeight:"400", fontSize:"250%", paddingTop:"5vh", margin:"0px"}}>Projects</h2>
                {this.state.projects.length == 0
                    ? <div class="loader"></div>
                    : this.projectComponents()}
            </div>
        )
    }
}

export default Projects