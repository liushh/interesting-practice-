import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's front-end code challenge!</h1>
				</header>
				<div>{this.props.reports.count}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    reports: state.reports,
  };
};

export default connect(mapStateToProps)(App);
