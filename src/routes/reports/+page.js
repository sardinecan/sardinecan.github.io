// src/routes/blog/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/reports`);
	const posts = await response.json();

	return {
		posts
	};
};