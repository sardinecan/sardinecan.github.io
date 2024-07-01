// src/routes/blog/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/notes`);
	const notes = await response.json();

	return {
		notes
	};
};