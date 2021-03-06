import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    //var X = onInputChange()
    //this.onInputChange = x.bind(this) -- what is the context of this here?
    //Is it the constructor? The object? The instance? I'm confused
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder = "Get a five day forecast"
          className = "form-control"
          value = {this.state.term}
          onChange = {this.onInputChange} />
          {/* //what is the context of 'this' here? unbounded -- its the form
          //but only by default, if you don't bound this function its anonymous
          //so it defaults to the object its called in, which is the <form>*/}
        <span className='input-group-btn'>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
