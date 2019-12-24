import React, { Component, Fragment } from 'react';

import Header from './Header';
import PreContent from './PreContent';
import MapDisplay from './MapDisplay';

import MeetingsList from './MeetingsList';
import PostContent from './PostContent';
import Footer from './Footer';
import MapDisplayComponent from './MapDisplayComponent';

const URL = 'http://localhost:8080/meetings';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      inputValue: '',
      regionsArray: [],
      selectedRegion: '',
      meetings: []
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      inputValue: filterText
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          meetings: data,
          regionsArray: data
            .map(mtng => mtng.region)
            .filter((value, index, self) => self.indexOf(value) === index)
        });
      });
  }
  render() {
    return (
      <Fragment>
        <Header
          regions={this.state.regionsArray}
          inputValue={this.state.inputValue}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <PreContent />
        <MapDisplayComponent
          selectedRegion={this.state.selectedRegion}
          inputValue={this.state.inputValue}
          meetings={this.state.meetings}
        />
        <MeetingsList meetings={this.state.meetings} />
        <PostContent />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
