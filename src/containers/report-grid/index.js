import React from 'react';
import PropTypes from 'prop-types';

import ReportCard from './ReportCard';

const ReportGrid = ({ reports, archiveReport }) => (
  <div className="report-grid">
    {reports.map(report => (
      <ReportCard key={report.id} report={report} archiveReport={archiveReport} />
    ))}
  </div>
);

ReportGrid.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    ssn: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    archived: PropTypes.bool.isRequired
  })).isRequired
};

export default ReportGrid;
