// src/routes/api/reports/+server.js
import { fetchReportsFiles } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allReports = await fetchReportsFiles();

	const sortedReports = allReports.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedReports);
};