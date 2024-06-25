// src/routes/blog/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/cheatsheets/javascript`);
	const mdFiles = await response.json();

	return {
		mdFiles
	};
};