import React, { Component } from 'react';

import Features from '../features/Features';
import StoryPictures from '../story/StoryPictures';
import StoryContent from '../story/StoryContent';
import Homes from '../homes/Homes';
import Gallery from '../gallery/Gallery';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

class Main extends Component {
  render() {
    return (
      <div className="container">
        {/* SIDEBAR  */}
        <Sidebar />
        {/* HEADER  */}
        <Header />
        <div className="realtors">Top 3 realtors</div>
        <Features />

        {/* STORY COMPONENTS SIDE BY SIDE */}
        <StoryPictures />
        <StoryContent />
        {/* HOMES  */}
        <Homes />
        {/* GALLERY  */}
        <Gallery />
        {/* FOOTER  */}
        <Footer />
      </div>
    );
  }
}

export default Main;
