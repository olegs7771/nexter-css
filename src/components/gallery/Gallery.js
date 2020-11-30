import React, { Component } from "react";
import gal1 from "../../img/gal-1.jpeg";
import gal2 from "../../img/gal-2.jpeg";
import gal3 from "../../img/gal-3.jpeg";
import gal4 from "../../img/gal-4.jpeg";
import gal5 from "../../img/gal-5.jpeg";
import gal6 from "../../img/gal-6.jpeg";
import gal7 from "../../img/gal-7.jpeg";
import gal8 from "../../img/gal-8.jpeg";
import gal9 from "../../img/gal-9.jpeg";
import gal10 from "../../img/gal-10.jpeg";
import gal11 from "../../img/gal-11.jpeg";
import gal12 from "../../img/gal-12.jpeg";
import gal13 from "../../img/gal-13.jpeg";
import gal14 from "../../img/gal-14.jpeg";

class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        <img src={gal1} alt="gal 1" className=" gallery__img gallery__img--1" />
        <img src={gal2} alt="gal 2" className=" gallery__img gallery__img--2" />
        <img src={gal3} alt="gal 3" className="gallery__img gallery__img--3" />
        <img src={gal4} alt="gal 4" className="gallery__img gallery__img--4" />
        <img src={gal5} alt="gal 5" className="gallery__img gallery__img--5" />
        <img src={gal6} alt="gal 6" className=" gallery__img gallery__img--6" />
        <img src={gal7} alt="gal 7" className="gallery__img gallery__img--7" />
        <img src={gal8} alt="gal 8" className="gallery__img gallery__img--8" />
        <img src={gal9} alt="gal 9" className="gallery__img gallery__img--9" />
        <img
          src={gal10}
          alt="gal 10"
          className="gallery__img gallery__img--10"
        />
        <img
          src={gal11}
          alt="gal 11"
          className="gallery__img gallery__img--11"
        />
        <img
          src={gal12}
          alt="gal 12"
          className="gallery__img gallery__img--12"
        />
        <img
          src={gal13}
          alt="gal 13"
          className="gallery__img gallery__img--13"
        />
        <img
          src={gal14}
          alt="gal 14"
          className="gallery__img gallery__img--14"
        />
      </section>
    );
  }
}
export default Gallery;
//
