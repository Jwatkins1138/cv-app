import React, { Component } from 'react';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.clickPersonal.bind(this);
    this.clickSummary.bind(this);
    this.clickSkills.bind(this);
    this.clickWorkHistory.bind(this);
    this.clickEducation.bind(this);
    this.clickPreview.bind(this);
  }

  clickPersonal = () => {
    this.props.setMain("PersonalInfo");
  }

  clickSummary = () => {
    this.props.setMain("Summary");
  }

  clickSkills = () => {
    this.props.setMain("Skills");
  }

  clickWorkHistory = () => {
    this.props.setMain("WorkHistory");
  }

  clickEducation = () => {
    this.props.setMain("Education");
  }

  clickPreview = () => {
    this.props.setMain("Preview");
  }

  render() {
    return (
      <div className="side-nav">
        <div onClick={this.clickPersonal} className="nav-item">Personal Info</div>
        <div onClick={this.clickSummary} className="nav-item">Summary</div>
        <div onClick={this.clickSkills} className="nav-item">Skills</div>
        <div onClick={this.clickWorkHistory} className="nav-item">Work History</div>
        <div onClick={this.clickEducation} className="nav-item">Education</div>
        <div onClick={this.clickPreview} className="nav-item">CV Preview</div>
      </div>
    );
  }
}

export default SideNav;