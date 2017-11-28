import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { ReportGrid } from './containers';
import { archiveReport, getReports } from './actions';
import { REPORT_COUNT_PER_PAGE } from './constants';


class App extends Component {
	constructor(props) {
    super(props);
    this.state = {};
  }

  _getReportList(reports, archiveReport) {
    if (!reports || reports.length === 0) {
      return <div>No reports available</div>;
    }
    return <ReportGrid reports={reports} archiveReport={archiveReport}/>
  }

  _hasMoreReportToLoad() {
    return this.props.count === REPORT_COUNT_PER_PAGE;
  }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Nova's front-end code challenge!</h1>
				</header>
				{this._getReportList(this.props.reports, this.props.archiveReport)}
        <button 
          className="load-more-buttom"
          onClick={this.props.getReports.bind(null, this.props.cursor)}>
            {this._hasMoreReportToLoad() ? 'Load more reports' : 'No more reports to load'}
        </button>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    reports: state.reports,
    cursor: state.cursor,
    count: state.count
  };
};

const mapDispatchToComponent = dispatch => ({
  archiveReport: report => dispatch(archiveReport(report)),
  getReports: cursor => dispatch(getReports(cursor))
});

App.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    ssn: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    archived: PropTypes.bool.isRequired
  })),
  count: PropTypes.number,
  cursor: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToComponent)(App);
