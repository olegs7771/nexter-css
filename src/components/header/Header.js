import React, { Component } from 'react';
import logo_hero from '../../img/logo.png';
import logo_bbc from '../../img/logo-bbc.png';
import logo_bi from '../../img/logo-bi.png';
import logo_forbes from '../../img/logo-forbes.png';
import logo_techcrunch from '../../img/logo-techcrunch.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo_hero} alt="Nexter logo" className="header__logo" />
        <h3 className="heading-3">Your own home</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
          <img src={logo_bbc} alt="bbc logo" className="header__seenon-logo" />
          <img src={logo_bi} alt="logo bi" className="header__seenon-logo" />
          <img
            src={logo_techcrunch}
            alt="logo technocrunch"
            className="header__seenon-logo"
          />
          <img
            src={logo_forbes}
            alt="logo forbes"
            className="header__seenon-logo"
          />
        </div>
      </header>
    );
  }
}

export default Header;
