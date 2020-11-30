import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <nav className="nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Find your dream home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Request proposal
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Download home planner
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact us
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Submit your
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              We are hiring
            </a>
          </li>
        </nav>
        <div className="copyright">
          <p className="copyright__text">&copy; Copyright 2020 Course Udemy</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
