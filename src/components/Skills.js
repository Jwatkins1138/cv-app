import React, { Component } from 'react';
import uniqid from "uniqid";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.setSkill.bind(this);
    this.moveAhead.bind(this);
    this.state = {
      skills: this.props.skillsProps.currentSkills,
      skill: {
        text: '',
        id: uniqid()
      }
    };
  }

  getSkill = (e) => {
    this.setState({
      skill: {
        text: e.target.value,
        id: this.state.skill.id
      }
    });
  }



  setSkill = async (e) => {
    e.preventDefault();
    await this.props.skillsProps.setSkill(this.state.skill);
    this.setState({
      skill: {
        text: '',
        id: uniqid()
      }
    });
    this.setState({
      skills: this.props.skillsProps.currentSkills
    });
  }

  moveAhead = () => {
    this.props.skillsProps.setMain("WorkHistory");
  }

  render() {
    const { skills, skill } = this.state

    return (
      <div className="form-card">
        <h1>Skills</h1>
        <ul>
          {skills.map((skillItem) =>{
            return <li key={skillItem.id}>{skillItem.text}</li>
          })}
        </ul>
        <form onSubmit={this.setSkill}>
          <label htmlFor="skill">add skill</label>
          <input
            onChange={this.getSkill}
            value={skill.text}
            type="text"
            id="skill"
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

export default Skills;