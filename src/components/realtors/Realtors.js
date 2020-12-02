import React, { Component } from 'react';
import realtor_1 from '../../img/realtor-1.jpeg';
import realtor_2 from '../../img/realtor-2.jpeg';
import realtor_3 from '../../img/realtor-3.jpeg';

class Realtors extends Component {
  render() {
    return (
      <div className="realtors">
        <h3 className="heading-3 realtors__heading  realtors__heading">
          Top 3 realtors
        </h3>

        <ul className="realtors__list">
          <li className="realtors__item">
            <a href="#" className="realtors__link">
              <img
                src={realtor_1}
                alt="realtor 1"
                className="realtors__link--img"
              />
              <div className="realtors__details">
                <div className="heading-4 heading-4--light">Eric Feinman</div>
                <p className="realtors__sold">245 houses sold</p>
              </div>
            </a>
          </li>
          <li className="realtors__item">
            <a href="#" className="realtors__link">
              <img
                src={realtor_2}
                alt="realtor 2"
                className="realtors__link--img"
              />
              <div className="realtors__details">
                <div className="heading-4 heading-4--light">Kim Brown</div>
                <p className="realtors__sold">245 houses sold</p>
              </div>
            </a>
          </li>
          <li className="realtors__item">
            <a href="#" className="realtors__link">
              <img
                src={realtor_3}
                alt="realtor 3"
                className="realtors__link--img"
              />
              <div className="realtors__details">
                <div className="heading-4 heading-4--light">Toby ramsey</div>
                <p className="realtors__sold">245 houses sold</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Realtors;
