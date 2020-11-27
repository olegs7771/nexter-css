import React, { Component } from "react";
import couple_img from "../../../src/img/story-1.jpeg";
import house_img from "../../../src/img/story-2.jpeg";

class StoryPictures extends Component {
  render() {
    return (
      <div className="story__pictures">
        <img
          src={couple_img}
          alt="Couple with a new house"
          className="story__img--1"
        />
        <img src={house_img} alt="A new house" className="story__img--2" />
      </div>
    );
  }
}

export default StoryPictures;
