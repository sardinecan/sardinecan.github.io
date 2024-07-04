// src/routes/reports/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/reports`);
	const reports = await response.json();

	return {
		reports
	};
};