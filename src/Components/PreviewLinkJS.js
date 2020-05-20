import React, { Component } from 'react';
import PreviewLink from 'preview-link-js'

class PreviewLinkJS extends Component {

  render(){
    return (
      <div className="App">
        <h1 style={{fontSize:"275%", fontWeight:"400", textAlign:"center"}}>preview-link-js</h1>
        <h3 style={{fontSize:"150%", fontWeight:"400", textAlign:"center"}}>for elegant previews of site links</h3>
        <h5 style={{width:"92.5%", textAlign:"left", marginLeft:"7.5%", marginBottom:"1.5%", marginTop:"0px", float:"left", fontSize:"175%", fontWeight:"500"}}>Sample Passage</h5>
        <p style={{lineHeight:"2em", width:"85%", textAlign:"left", margin:"0px 7.5%", marginBottom:"0.5%", float:"left", fontSize:"125%", fontWeight:"300"}}>
          This passage contains links for you to hover over. With&nbsp;

          <PreviewLink class="preview-link" href="https://www.npmjs.com/package/preview-link-js"  style={{fontWeight:"500", display:"inline-block"}}>preview-link-js</PreviewLink>, 

          viewing abbreviated details to hyperlinks becomes as simple as plugging in your url and href text! 
        </p><br></br><br></br><br></br>
        <p style={{lineHeight:"2em", width:"85%", textAlign:"left", margin:"0px 7.5%", marginBottom:"0.5%", float:"left", fontSize:"125%", fontWeight:"300"}}>
          <b style={{fontWeight:"500"}}>preview-link-js</b> can also be used for displaying quick details of news articles before clicking on them:&nbsp;
          <li style={{marginLeft:"2.5%"}}><PreviewLink class="preview-link" href="https://www.nytimes.com/article/coronavirus-driving-restrictions.html" style={{fontWeight:"500", display:"inline-block"}}>New York Times Article</PreviewLink></li>
          <li style={{marginLeft:"2.5%"}}><PreviewLink class="preview-link" href="https://medium.com/@bretcameron/how-to-publish-your-first-npm-package-b224296fc57b" style={{fontWeight:"500", display:"inline-block"}}>Medium.com Article</PreviewLink></li>
          <li style={{marginLeft:"2.5%"}}><PreviewLink class="preview-link" href="https://www.huffpost.com/entry/eddie-hall-video-deadlift_n_578369bee4b0c590f7e9f22d" style={{fontWeight:"500", display:"inline-block"}}>Huffington Post Article</PreviewLink></li>
        </p>
        <p style={{lineHeight:"2em", width:"85%", textAlign:"left", margin:"0px 7.5%", marginBottom:"0.5%", float:"left", fontSize:"125%", fontWeight:"300"}}>
            Alternatively, you can also preview social media links!&nbsp;
            <PreviewLink class="preview-link" href="https://www.facebook.com/VeganDotCom/"  style={{fontWeight:"500", display:"inline-block"}}>Facebook</PreviewLink>,&nbsp;
            <PreviewLink class="preview-link" href="https://twitter.com/RobLowe"  style={{fontWeight:"500", display:"inline-block"}}>Twitter</PreviewLink>,&nbsp;
            <PreviewLink class="preview-link" href="https://www.instagram.com/shawstrength/"  style={{fontWeight:"500", display:"inline-block"}}>Instagram</PreviewLink>
        </p>
      </div>
    );
  }
}

export default PreviewLinkJS;
