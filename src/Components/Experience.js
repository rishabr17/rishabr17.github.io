import React, { Component } from 'react'
import 'firebase/firestore'
import { db } from './Firebase'

class Experience extends Component {

    state = {
        experience: []
    }

    componentWillMount(){
        this.firebaseRetrieve();
    }

    firebaseRetrieve = () =>{
        db.collection("experience")
        .orderBy("Order", "desc")
        .get()
        .then(querySnapshot =>{
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({experience: data});
        })
    }

    experienceComponents = () =>{
        const elements = this.state.experience.map(r => (
            <div>
                <h3 style={{fontWeight:"400", fontSize:"150%", paddingTop:"2.5%", textIndent:"2.5%", margin:"0px"}}>{r.Employer}</h3>
                <p style={{fontWeight:"400", fontSize:"110%", paddingTop:"1%", textIndent:"2.5%", margin:"0px"}}>{r.Position}</p> 
                <p style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", textIndent:"2.5%", margin:"0px"}}>{r.StartDate} - {r.EndDate}</p> 
                <p style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", textIndent:"2.5%", margin:"0px"}}>{r.Location}</p> 
                <ul>
                    {r.Description.map(d => (
                        <li style={{fontWeight:"300", fontSize:"110%", paddingTop:"0%", marginLeft:"5%", width:"60vw", lineHeight:"1.5em"}}>{d}</li>
                    ))}
                </ul>
            </div>
        ))
        return <div>{elements}</div>;
    }

    render(){
        return(
            <div id="experience" style={{paddingBottom:"5%", paddingTop:"60px", borderBottom:"solid 0.5px gray", marginRight:"5%"}} className="education-container">
                <h2 style={{fontWeight:"400", fontSize:"250%", paddingTop:"5vh", margin:"0px"}}>Experience</h2>
                {this.state.experience.length == 0
                    ? <div class="loader"></div>
                    : this.experienceComponents()}
            </div>
        )
    }
}

export default Experience