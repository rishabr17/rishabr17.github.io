import React, { Component } from 'react'
import 'firebase/firestore'
import { db } from './Firebase'

class Skills extends Component {

    state = {
        skills: ""
    }

    componentWillMount(){
        this.firebaseRetrieve();
    }

    firebaseRetrieve = () =>{
        db.collection("skills")
        .get()
        .then(querySnapshot =>{
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({skills: data[0].AllSkills});
        })
    }

    render(){
        return(
            <div id="skills" style={{paddingTop:"60px", paddingBottom:"10vh", borderBottom:"solid 0.5px gray", marginRight:"5%"}} className="education-container">
                <h2 style={{fontWeight:"400", fontSize:"250%", paddingTop:"5vh", margin:"0px"}}>Skills</h2>
                {this.state.skills == ""
                    ? <div class="loader"></div>
                    : <h3 style={{fontWeight:"300", fontSize:"150%", paddingTop:"2.5%", width:"50vw", paddingLeft:"2.5%", lineHeight:"1.5em", margin:"0px"}}>{this.state.skills}</h3>
                }
            </div>
        )
    }
}

export default Skills