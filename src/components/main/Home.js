import React, { Component } from 'react'

import Features from '../features/Features';
import StoryPictures from '../story/StoryPictures';
import StoryContent from '../story/StoryContent';

export default class Home extends Component {
  render() {
    return (
     <div className="container">
       <div className="sidebar">
         sidebar
       </div>
       <header className="header">
         Header
       </header>
       <div className="realtors">
         Top 3 realtors
       </div>
       <Features/>

       {/* STORY COMPONENTS SIDE BY SIDE */}
       <StoryPictures/>
       <StoryContent/>
       
       <div className="story__content">
         Content
       </div>
       <section className="homes">
         Homes
       </section>
       <section className="gallery">
         Gallery
       </section>
       <footer className="footer">
         Footer
       </footer>
     </div>
    )
  }
}
