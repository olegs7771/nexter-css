import React, { Component } from "react";
import sprite from "../../img/sprite.svg";

class HomeCard extends Component {
  render() {
    const { img, alt, name, location, rooms, area, price } = this.props.house;
    return (
      <div className="home">
        <img src={img} alt={alt} className="home__img" />
        <svg className="home__icon">
          <use href={sprite + "#icon-heart"} />
        </svg>
        <h5 className="home__name">{name}</h5>
        {/* LOCATION  */}
        <div className="home__location">
          <svg className="home__icon">
            <use href={sprite + "#icon-map-pin"} />
          </svg>
          <p className="homo__location-text">{location}</p>
        </div>
        {/* ROOMS  */}
        <div className="home__rooms">
          <svg className="home__icon">
            <use href={sprite + "#icon-profile-male"} />
          </svg>
          <p className="homo__rooms-text">{rooms} rooms</p>
        </div>
        {/* AREA  */}
        <div className="home__area">
          <svg className="home__icon">
            <use href={sprite + "#icon-expand"} />
          </svg>
          <p className="homo__area-text">
            {area}m<sup>2</sup>
          </p>
        </div>
        {/* PRICE  */}
        <div className="home__price">
          <svg className="home__icon">
            <use href={sprite + "#icon-key"} />
          </svg>
          <p className="homo__price-text">${price}</p>
        </div>
        <button className="cta">Contact realtor</button>
      </div>
    );
  }
}
export default HomeCard;
