import Header from "./components/Header"
import Preview from "./components/Preview"
import SideNav from "./components/SideNav"
import Education from "./components/Education"
import PersonalInfo from "./components/PersonalInfo"
import Skills from "./components/Skills"
import Summary from "./components/Summary"
import WorkHistory from "./components/WorkHistory"
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleSideNav.bind(this);
    this.setMain.bind(this);
    this.setPersonal.bind(this);
    this.setSummary.bind(this);
    this.setSkill.bind(this);
    this.setWork.bind(this);
    this.setSchool.bind(this);
    this.state = {
      showSideNav: false,
      mainRender: 'PersonalInfo',
      summary: '',
      personalInfo: {
        fName: '',
        lName: '',
        title: '',
        email: '',
        phone: ''
      },
      skills: [],
      workHistory: [],
      education: []
    };
  }

  toggleSideNav = (show) => {
    if(show){
      this.setState({
        showSideNav: false
      });
    } else {
      this.setState({
        showSideNav: true
      });
    }
  }

  setMain = (main) => {
    this.setState({
      mainRender: main
    });
  }

  setPersonal = (info) => {
    this.setState({
      personalInfo: info
    });
  }

  setSummary = (summ) => {
    this.setState({
      summary: summ
    });
  }

  setSkill = (skill) => {
    this.setState({
      skills: this.state.skills.concat(skill)
    })
  }

  setWork = (work) => {
    this.setState({
      workHistory: this.state.workHistory.concat(work)
    })
  }

  setSchool = (school) => {
    this.setState({
      education: this.state.education.concat(school)
    })
  }

  render() {
    let {mainRender,
        showSideNav, 
        personalInfo, 
        summary, 
        skills, 
        workHistory, 
        education } = this.state;

    const renderSideNav = () => {
      if(showSideNav){
        return <SideNav  setMain={this.setMain}/>
      } 
    }

    const renderMain = () => {
      switch (mainRender) {
        case "PersonalInfo":
          return <PersonalInfo  personalProps={personalProps} />;
        case "Summary":
          return <Summary  summaryProps={summaryProps} />;
        case "Skills":
          return <Skills skillsProps={skillsProps}/>;
        case "WorkHistory":
          return <WorkHistory workProps={workProps}/>
        case "Education":
          return <Education eduProps={eduProps}/>
        case "Preview":
          return <Preview previewProps={previewProps}/>
        default:
          return null;  
      }
    }

    const headProps = [this.toggleSideNav, showSideNav];
    const personalProps = {
      info: personalInfo,
      setPersonal: this.setPersonal,
      setMain: this.setMain
    };
    const summaryProps = {
      summ: summary,
      setSummary: this.setSummary,
      setMain: this.setMain
    };
    const skillsProps = {
      currentSkills: skills,
      setSkill: this.setSkill,
      setMain: this.setMain
    };
    const workProps = {
      history: workHistory,
      setWork: this.setWork,
      setMain: this.setMain
    };
    const eduProps = {
      edu: education,
      setSchool: this.setSchool,
      setMain: this.setMain
    };
    const previewProps = {
      info: personalInfo,
      summ: summary,
      currentSkills: skills,
      currentWH: workHistory,
      edu: education
    };
    


    return (
      <div className="main">
        <Header headProps = {headProps} />
        <div className="sub">
          <div className="sub-side">
          {renderSideNav()}
          </div>
          <div className="sub-main">
          {renderMain()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
