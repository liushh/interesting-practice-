import React from 'react';
import PropTypes from 'prop-types';


const ReportCard = ({ report, archiveReport }) => (
  <div className="report-card">
    <div>First name: {report.firstName}</div>
    <div>Last name: {report.lastName}</div>
    <div>Date of birth: {report.dob}</div>
    <div>SSN: {report.ssn}</div>
    <div>Score: {report.score}</div>
    <div>Achived: {report.archived}</div>
    <div 
      className={report.archived ? "archive-button-disable" : "archive-button"}
      onClick={archiveReport.bind(null, report)}>Archive Report</div>
  </div>
);

ReportCard.propTypes = {
  report: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired
  }).isRequired
};

export default ReportCard;
