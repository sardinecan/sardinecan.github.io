// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, place, speaker, keywords } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		place,
		speaker,
		date,
		keywords
	};
}