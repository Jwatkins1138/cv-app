import React, { Component } from 'react';
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
    this.setSchool.bind(this);
    this.moveAhead.bind(this);
    this.state = {
      education: this.props.eduProps.edu,
      school: {
        name: '',
        degree: '',
        graduation: '',
        id: uniqid()
      }
    };
  }

  getName = (e) => {
    this.setState({
      school: {
        name: e.target.value,
        degree: this.state.school.degree,
        graduation: this.state.school.graduation,
        id: this.state.school.id
      }
    });
  }

  getDegree = (e) => {
    this.setState({
      school: {
        name: this.state.school.name,
        degree: e.target.value,
        graduation: this.state.school.graduation,
        id: this.state.school.id
      }
    });
  }

  getGraduation = (e) => {
    this.setState({
      school: {
        name: this.state.school.name,
        degree: this.state.school.degree,
        graduation: e.target.value,
        id: this.state.school.id
      }
    });
  }


  setSchool = async (e) => {
    e.preventDefault();
    await this.props.eduProps.setSchool(this.state.school);
    this.setState({
      school: {
        name: '',
        degree: '',
        graduation: '',
        id: uniqid()
      }
    });
    this.setState({
      education: this.props.eduProps.edu
    });
  }

  moveAhead = () => {
    this.props.eduProps.setMain("Preview");
  }

  render() {
    const { education, school } = this.state

    return (
      <div className="form-card">
        <h1>Education</h1>
        {education.map((schoolItem) =>{
          return <div key={schoolItem.id}>
                  <div className="work-item"><h3>{schoolItem.name}</h3></div>
                  <div className="work-item"><h4>{schoolItem.degree}</h4></div>
                  <div className="work-item"><p><i>{schoolItem.graduation}</i></p></div>
                </div>  
        })}
        <form onSubmit={this.setSchool}>
          <label htmlFor="name">school name</label>
          <input
            onChange={this.getName}
            value={school.name}
            type="text"
            id="name"
          />
          <label htmlFor="degree">degree</label>
          <input
            onChange={this.getDegree}
            value={school.degree}
            type="text"
            id="degree"
          />
          <label htmlFor="graduation">graduation date</label>
          <input
            onChange={this.getGraduation}
            value={school.graduation}
            type="text"
            id="graduation"
          />
          <div className="button-box">
            <input
              type="submit"
              value="submit"
            />
            <input
              type="button"
              onClick={this.moveAhead}
              value="done"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Education;