// src/routes/notes/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, keywords } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		keywords
	};
}