export const fetchLanguagesMarkdownFiles = async () => {
	const allMarkdownFiles = import.meta.glob('/src/routes/languages/*/*.md');
	const iterableMarkdownFiles = Object.entries(allMarkdownFiles);

	const allCheatsheets = await Promise.all(
		iterableMarkdownFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const filePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: filePath
			};
		})
	);

	return allCheatsheets;
};

export const fetchPostsMarkdownFiles = async () => {
	const allMarkdownFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterableMarkdownFiles = Object.entries(allMarkdownFiles);

	const allPosts = await Promise.all(
		iterableMarkdownFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const filePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: filePath
			};
		})
	);

	return allPosts;
};

export const fetchReportsMarkdownFiles = async () => {
	const allMarkdownFiles = import.meta.glob('/src/routes/reports/*.md');
	const iterableMarkdownFiles = Object.entries(allMarkdownFiles);

	const allReports = await Promise.all(
		iterableMarkdownFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const filePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: filePath
			};
		})
	);

	return allReports;
};