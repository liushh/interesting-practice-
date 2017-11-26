import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { ReportGrid } from './containers';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  _getReportList(reports) {
    if (!reports || reports.length === 0) return null;
    return <ReportGrid reports={reports} />
  }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's front-end code challenge!</h1>
				</header>
				{this._getReportList(this.props.reports.reports)}
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
