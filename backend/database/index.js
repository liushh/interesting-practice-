const data = require('./data');
const db = {
	data: data.reports || [],
	get({ count = 20, cursor = new Date().toISOString() }) {
		const reports = this.data.sort(
			function(report1, report2) {
			  return new Date(report1.createdAt) - new Date(report2.createdAt);
			})
		.filter(report => !report.archived) // Filter out archived reports
		.filter(report => new Date(report.createdAt) >= new Date(cursor)) // Filter out reports created before cursor
		.slice(0, count); // Slice to requested count

		return {
			count: reports.length,
			cursor,
			reports,
		};
	},
	archive(id) {
		if (!this.data.find(report => report.id === id)) {
			throw new Error('Report not found!');
		};

		// Find report to archive, set it to archived=true
		this.data = this.data.map((report) => {
			return (report.id === id) ? { ...report, archived: true } : report;
		});

		return this.data.find(report => report.id === id);
	},
};

module.exports = { db };
