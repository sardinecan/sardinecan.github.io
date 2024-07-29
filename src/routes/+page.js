// src/routes/notes/+page.js
export const load = async ({ fetch }) => {
	const notesResponse = await fetch(`/api/notes`);
	const notes = await notesResponse.json();
  const blogResponse = await fetch(`/api/blog`);
	const blog = await blogResponse.json();
  const reportsResponse = await fetch(`/api/reports`);
	const reports = await reportsResponse.json();

	return {
		notes,
    blog,
    reports
	};
};