import React from 'react';
import PropTypes from 'prop-types';

import ReportCard from './ReportCard';

const ReportGrid = ({ reports }) => (
  <div className="report-grid">
    {reports.map(report => (
      <ReportCard key={report.id} report={report} />
    ))}
  </div>
);

ReportGrid.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired
  })).isRequired
};

export default ReportGrid;