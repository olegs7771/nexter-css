import React, { Component } from 'react';
import HomeCard from './HomeCard';
import h1 from '../../img/house-1.jpeg';
import h2 from '../../img/house-2.jpeg';
import h3 from '../../img/house-3.jpeg';
import h4 from '../../img/house-4.jpeg';
import h5 from '../../img/house-5.jpeg';
import h6 from '../../img/house-6.jpeg';

class Homes extends Component {
  render() {
    const houses = [
      {
        img: h1,
        alt: 'Home 1',
        name: 'Beuatiful family house',
        location: 'USA',
        rooms: 5,
        area: 325,
        price: '1,200,000',
      },
      {
        img: h2,
        alt: 'Home 2',
        name: 'Beuatiful  house',
        location: 'Canada',
        rooms: 4,
        area: 320,
        price: '1,400,000',
      },
      {
        img: h3,
        alt: 'Home 3',
        name: 'Beuatiful glass villa',
        location: 'USA',
        rooms: 7,
        area: 420,
        price: '1,100,000',
      },
      {
        img: h4,
        alt: 'Home 4',
        name: 'Gorgeous villa',
        location: 'USA',
        rooms: 3,
        area: 225,
        price: '1,800,000',
      },
      {
        img: h5,
        alt: 'Home 5',
        name: 'Beuatiful family condo',
        location: 'Greece',
        rooms: 7,
        area: 425,
        price: '1,500,000',
      },
      {
        img: h6,
        alt: 'Home 6',
        name: 'Beuatiful family house',
        location: 'Canada',
        rooms: 3,
        area: 425,
        price: '1,500,000',
      },
    ];

    return (
      <section className="homes">
        {houses.map((house, index) => (
          <HomeCard house={house} key={index} />
        ))}
      </section>
    );
  }
}

export default Homes;
