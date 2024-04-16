// src/routes/blog/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/languages`);
	const posts = await response.json();

	return {
		posts
	};
};