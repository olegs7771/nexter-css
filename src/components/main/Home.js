import React, { Component } from 'react'

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
       <section className="features">
         features
       </section>
       <div className="story__pictures">
         Pictures
       </div>
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
