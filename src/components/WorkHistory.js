import React, { Component } from 'react';
import uniqid from "uniqid";

class WorkHistory extends Component {
  constructor(props) {
    super(props);
    this.setWork.bind(this);
    this.moveAhead.bind(this);
    this.state = {
      history: this.props.workProps.history,
      work: {
        business: '',
        title: '',
        startDate: '',
        endDate: '',
        summary: '',
        id: uniqid()
      }
    };
  }

  getBusiness = (e) => {
    this.setState({
      work: {
        business: e.target.value,
        title: this.state.work.title,
        startDate: this.state.work.startDate,
        endDate: this.state.work.endDate,
        summary: this.state.work.summary,
        id: this.state.work.id
      }
    });
  }

  getTitle = (e) => {
    this.setState({
      work: {
        business: this.state.work.business,
        title: e.target.value,
        startDate: this.state.work.startDate,
        endDate: this.state.work.endDate,
        summary: this.state.work.summary,
        id: this.state.work.id
      }
    });
  }

  getStart = (e) => {
    this.setState({
      work: {
        business: this.state.work.business,
        title: this.state.work.title,
        startDate: e.target.value,
        endDate: this.state.work.endDate,
        summary: this.state.work.summary,
        id: this.state.work.id
      }
    });
  }

  getEnd = (e) => {
    this.setState({
      work: {
        business: this.state.work.business,
        title: this.state.work.title,
        startDate: this.state.work.startDate,
        endDate: e.target.value,
        summary: this.state.work.summary,
        id: this.state.work.id
      }
    });
  }

  getSummary = (e) => {
    this.setState({
      work: {
        business: this.state.work.business,
        title: this.state.work.title,
        startDate: this.state.work.startDate,
        endDate: this.state.work.endDate,
        summary: e.target.value,
        id: this.state.work.id
      }
    });
  }

  setWork = async (e) => {
    e.preventDefault();
    await this.props.workProps.setWork(this.state.work);
    this.setState({
      work: {
        business: '',
        title: '',
        startDate: '',
        endDate: '',
        summary: '',
        id: uniqid()
      }
    });
    this.setState({
      history: this.props.workProps.history
    });
  }

  moveAhead = () => {
    this.props.workProps.setMain("Education");
  }

  render() {
    const { history, work } = this.state

    return (
      <div className="form-card">
        <h1>Work History</h1>
        {history.map((workItem) =>{
          return <div key={workItem.id}>
                  <div className="work-item"><h3>{workItem.business}</h3></div>
                  <div className="work-item"><h4>{workItem.title}</h4></div>
                  <div className="work-item"><p><i>{workItem.startDate} - {workItem.startDate}</i></p></div>
                  <div className="work-item"><p>{workItem.summary}</p></div>
                </div>  
        })}
        <form onSubmit={this.setWork}>
          <label htmlFor="business">business name</label>
          <input
            onChange={this.getBusiness}
            value={work.business}
            type="text"
            id="business"
          />
          <label htmlFor="title">job title</label>
          <input
            onChange={this.getTitle}
            value={work.title}
            type="text"
            id="title"
          />
          <label htmlFor="start">start date</label>
          <input
            onChange={this.getStart}
            value={work.startDate}
            type="text"
            id="start"
          />
          <label htmlFor="end">end date</label>
          <input
            onChange={this.getEnd}
            value={work.endDate}
            type="text"
            id="end"
          />
          <label htmlFor="summary">summary</label>
          <input
            onChange={this.getSummary}
            value={work.summary}
            type="text"
            id="summary"
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

export default WorkHistory;