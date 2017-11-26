import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { ReportGrid } from './containers';
import { archiveReport } from './actions';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  _getReportList(reports, archiveReport) {
    if (!reports || reports.length === 0) return null;
    console.log('reports = ', reports);
    return <ReportGrid reports={reports} archiveReport={archiveReport}/>
  }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's front-end code challenge!</h1>
				</header>
				{this._getReportList(this.props.reports, this.props.archiveReport)}
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    reports: state.reports,
  };
};

const mapDispatchToComponent = dispatch => ({
  archiveReport: report => dispatch(archiveReport(report))
});

export default connect(mapStateToProps, mapDispatchToComponent)(App);
