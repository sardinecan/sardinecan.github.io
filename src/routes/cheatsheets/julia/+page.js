// src/routes/blog/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/cheatsheets/julia`);
	const mdFiles = await response.json();

	return {
		mdFiles
	};
};