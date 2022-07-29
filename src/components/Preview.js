import React, { Component } from 'react';

class Preview extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="preview">
        <div className="preview-section">
          <div id="pv-info">
            <h1>{this.props.previewProps.info.fName} {this.props.previewProps.info.lName}</h1>
            <h3>{this.props.previewProps.info.title}</h3>
            <ul>
              <li><strong>email: </strong>{this.props.previewProps.info.email}</li>
              <li><strong>phone: </strong>{this.props.previewProps.info.phone}</li>
            </ul>
          </div>
          <div id="pv-summ">
            <h3>professional summary</h3>
            <p>{this.props.previewProps.summ}</p>
          </div>  
        </div>
        <div className="preview-section">
          <div id="pv-skills">
            <h3>skills</h3>
            <ul>
              {this.props.previewProps.currentSkills.map((skillItem) =>{
              return <li key={skillItem.id}>{skillItem.text}</li>
            })}
        </ul>
          </div>
          <div id="pv-work">
            <h3>work history</h3>
            {this.props.previewProps.currentWH.map((workItem) =>{
              return<div key={workItem.id}>
                      <div className="work-item"><h4>{workItem.business} / {workItem.title}</h4></div>
                      <div className="work-item"><p><i>{workItem.startDate} - {workItem.startDate}</i></p></div>
                      <div className="work-item"><p>{workItem.summary}</p></div>
                    </div>  
            })}
          </div>
        </div>
        <div className="preview-section-footer">
          <div id="pv-education">
            <h3>education</h3>
            <div className="schools">
            {this.props.previewProps.edu.map((schoolItem) =>{
              return<div key={schoolItem.id} className="school-item">
                      <div className="work-item"><h4>{schoolItem.name} / {schoolItem.degree}</h4></div>
                      <div className="work-item"><p><i>{schoolItem.graduation}</i></p></div>
                    </div>  
            })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
