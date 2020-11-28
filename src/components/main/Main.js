import React, { Component } from "react";

import Features from "../features/Features";
import StoryPictures from "../story/StoryPictures";
import StoryContent from "../story/StoryContent";
import Homes from "../homes/Homes";
import Gallery from "../gallery/Gallery";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">sidebar</div>
        <header className="header">Header</header>
        <div className="realtors">Top 3 realtors</div>
        <Features />

        {/* STORY COMPONENTS SIDE BY SIDE */}
        <StoryPictures />
        <StoryContent />
        {/* HOMES  */}
        <Homes />
        {/* GALLERY  */}
        <Gallery />
        <footer className="footer">Footer</footer>
      </div>
    );
  }
}

export default Main;
