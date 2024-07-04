// src/routes/cheatsheets/vim/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/cheatsheets`);
	const mdFiles = await response.json();

	return {
		mdFiles
	};
};