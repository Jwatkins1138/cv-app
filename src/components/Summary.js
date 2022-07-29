import React, { Component } from 'react';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.setSummary.bind(this);
    this.state = {
      summary: this.props.summaryProps.summ
    };
  }

  getSumm = (e) => {
    this.setState({
      summary: e.target.value
    });
  }



  setSummary = (e) => {
    e.preventDefault();
    this.props.summaryProps.setSummary(this.state.summary);
    this.props.summaryProps.setMain("Skills");
  }

  render() {
    const { summary } = this.state

    return (
      <div className="form-card">
        <h1>Professional Summary</h1>
        <form onSubmit={this.setSummary}>
          <label htmlFor="summary">summary</label>
          <textarea
            onChange={this.getSumm}
            value={summary}
            type="text"
            id="summary"
          >
          </textarea>  
          <input 
            type="submit"
            value="submit"
          />
        </form>
      </div>
    );
  }
}

export default Summary;