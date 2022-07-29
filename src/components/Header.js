import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.clickToggle.bind(this);
  }

  clickToggle = () => {
    this.props.headProps[0](this.props.headProps[1]);
  }

  render() {


    return (
      <div className="header">
        <div onClick={this.clickToggle} className="icon nav-icon"></div>
        <div className="header-title">
          <h1>CV Generator</h1>
        </div>  
        <div className="icon"></div>
      </div>
    );
  }
}

export default Header;
