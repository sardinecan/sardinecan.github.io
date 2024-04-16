// src/routes/blog/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/languages/xhtml`);
	const mdFiles = await response.json();

	return {
		mdFiles
	};
};