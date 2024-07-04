// src/routes/cheatsheets/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/cheatsheets`);
	const cheatsheets = await response.json();

	return {
		cheatsheets
	};
};