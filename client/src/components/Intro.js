import React, { Component } from "react";
import MomSubmit from "./MomSubmit";
import Sample from "./Sample";
import "../index.css";

const introWords = {
  borderRadius: "10px",
  fontFamily: "Tajawal, 'sans-serif'",
  fontSize: "20px",
};

const introBody = {
  marginTop: "150px",
  width: "50%",
  float: "left",
  marginLeft: "500px",
  borderRadius: "10px",
  textAlign: "center"
};


const buttonAlign = {
  color: "#ffab40",
  marginRight: "24px",
  WebkitTransition: "color .3s ease",
  transition: "color .3s ease",
  textTransform: "uppercase",
  borderStyle: "none"
};

class Intro extends Component {
  state = {
    start: true,
    sample: false
  };

  startVideo = () => {
    this.setState({start: false});
  };

  endVideo = () => {
    this.setState({start: true});
  };

  showSample = () => {
    this.setState({sample: true});
  };

  hideSample = () => {
    this.setState({sample: false});
  };

  render() {
    const videoState = this.state.start;
    let video
    if (videoState) {
      video = <div className="buttonSection">
        <button onClick={this.startVideo}><i class="fas fa-video"></i></button>
      </div>
    } else {
      video = <div>
        <div className="contentVideo">
          <h5>Video is currently in production, please check back shortly! Thank You</h5>
        </div>
        <button id="endVideo" onClick ={this.endVideo}>Hide</button>
      </div>
    }

    const sampleState = this.state.sample;
    let sampleDiv
    if (sampleState) {
      sampleDiv =
      <Sample
        hideSample={this.hideSample}
        />
    } else {
      ""
    }

    const currentSampleState = this.state.sample;
    let sampleClass
    if (currentSampleState) {
      sampleClass = "sampleOn"
    } else {
      sampleClass = "sampleOff"
    }

    return(
      <div className="mainContent">
        <div className={sampleClass}>
          <div className="introBody">
            <div className="content">
              <h4><i class="fas fa-book-open"></i>&nbsp;Our Story</h4>
              <p>Mommy Fails is a way that moms from around the world can connect through personal
                stories about the hardships and difficulties of being a mother.
              </p>
              {video}
            </div>

          </div>
          <div className="introBody">
            <div className="content">
              <h4><i class="fas fa-star"></i>&nbsp;Our Purpose</h4>
              <p>
                (This section is currently still under construction, please check back shortly, thank you!)
                <br></br><br></br>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <MomSubmit showSample={this.showSample} />
        </div>
        {sampleDiv}
      </div>
    );
  }
  
}

// <iframe width="560" height="315" src="https://www.youtube.com/embed/lKw6uqtGFfo"
//   frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

export default Intro;
