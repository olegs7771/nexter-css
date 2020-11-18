import React, { Component } from 'react'
import sprite from '../../img/sprite.svg';

 class Features extends Component {
  render() {
    return (
      <section className='features'>
        <div className="feature">
          <svg className='feature__icon'>
            <use href={sprite +'#icon-global'}/>
          </svg>
          <h4 className="heading-4 heading-4--dark ">
            World's best luxury homes
          </h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
          </p>
        </div>
        <div className="feature">
          <svg className='feature__icon'>
            <use href={sprite +'#icon-trophy'}/>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Only the best properties
          </h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
           
          </p>
        </div>
        <div className="feature">
          <svg className='feature__icon'>
            <use href={sprite +'#icon-map-pin'}/>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            All homes in top locations.
          </h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
          </p>
        </div>
        <div className="feature">
          <svg className='feature__icon'>
            <use href={sprite +'#icon-key'}/>
          </svg>
          <h4 className="heading-4">
            New home in one week.
          </h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
          </p>
        </div>
        <div className="feature">
          <svg className='feature__icon'>
            <use href={sprite +'#icon-presentation'}/>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Top 1% realtors
          </h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
          </p>
        </div>
        <div className="feature">
          <svg className='feature__icon'>
            <use href={sprite +'#icon-lock'}/>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Secure payments on Nexter
          </h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni.
          </p>
        </div>
      
     </section>
    )
  }
}

export default Features;