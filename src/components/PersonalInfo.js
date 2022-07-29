import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.setInfo.bind(this);
    this.state = {
      info: this.props.personalProps.info
    };
  }

  getFName = (e) => {
    this.setState({
      info: {
        fName: e.target.value,
        lName: this.state.info.lName,
        title: this.state.info.title,
        email: this.state.info.email,
        phone: this.state.info.phone
      }
    });
  }

  getLName = (e) => {
    this.setState({
      info: {
        fName: this.state.info.fName,
        lName: e.target.value,
        title: this.state.info.title,
        email: this.state.info.email,
        phone: this.state.info.phone
      }
    });
  }

  getTitle = (e) => {
    this.setState({
      info: {
        fName: this.state.info.fName,
        lName: this.state.info.lName,
        title: e.target.value,
        email: this.state.info.email,
        phone: this.state.info.phone
      }
    });
  }

  getEmail = (e) => {
    this.setState({
      info: {
        fName: this.state.info.fName,
        lName: this.state.info.lName,
        title: this.state.info.title,
        email: e.target.value,
        phone: this.state.info.phone
      }
    });
  }

  getPhone = (e) => {
    this.setState({
      info: {
        fName: this.state.info.fName,
        lName: this.state.info.lName,
        title: this.state.info.title,
        email: this.state.info.email,
        phone: e.target.value
      }
    });
  }


  

  setInfo = (e) => {
    e.preventDefault();
    this.props.personalProps.setPersonal(this.state.info);
    console.log(this.state.info);
    this.props.personalProps.setMain("Summary");
  }


  render() {
    const { info } = this.state;

    return (
      <div className="form-card">
        <h1>Personal Info</h1>
        <form onSubmit={this.setInfo}>
          <label htmlFor="fname">first name</label>
          <input
            onChange={this.getFName}
            value={info.fName}
            type="text"
            id="fname"
          />
          <label htmlFor="lname">last name</label>
          <input
            onChange={this.getLName}
            value={info.lName}
            type="text"
            id="lname"
          />
          <label htmlFor="title">job title</label>
          <input
            onChange={this.getTitle}
            value={info.title}
            type="text"
            id="title"
          />
          <label htmlFor="email">email</label>
          <input
            onChange={this.getEmail}
            value={info.email}
            type="text"
            id="email"
          />
          <label htmlFor="phone">phone</label>
          <input
            onChange={this.getPhone}
            value={info.phone}
            type="text"
            id="phone"
          />
          <input 
            type="submit"
            value="submit"
          />
        </form>
      </div>
    );
  }
}

export default PersonalInfo;