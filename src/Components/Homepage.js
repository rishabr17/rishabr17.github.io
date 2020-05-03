import React, { Component } from 'react'

class Homepage extends Component {

    state= {
        opacity:"1"
    }

    listenScrollEvent = e => {
        if (window.scrollY > window.innerHeight*0.30 && this.state.opacity > 0) {
          this.setState({opacity: (window.innerHeight*10-window.scrollY*12)/(window.innerHeight*10)})
        }else if(window.scrollY < window.innerHeight && this.state.opacity < 1){
            this.setState({opacity: (window.innerHeight-window.scrollY*1.1)*window.innerHeight})
        }
      }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render(){
        return(
            <div id="home" class="homepage-container">
                <div class="flex-center">
                    <div class="flex-item-center">
                        <h1 style={{fontWeight:"300", fontSize:"500%"}}>Rishab R</h1>
                    </div>
                    </div>
                <div class="flex-center-bottom" style={{borderBottom:"solid 0.5px gray", marginLeft:"10%", marginRight:"5%"}}>
                    <div class="flex-item-center">
                        <p style={{opacity:this.state.opacity}}>Created with ReactJS and Firebase</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage