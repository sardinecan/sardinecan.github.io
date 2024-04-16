export const fetchJuliaFiles = async () => {
	const allMarkdownFiles = import.meta.glob('/src/routes/languages/julia/*.md');
	const iterableMarkdownFiles = Object.entries(allMarkdownFiles);

	const allFiles = await Promise.all(
		iterableMarkdownFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const filePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: filePath
			};
		})
	);

	return allFiles;
};

export const fetchHtmlFiles = async () => {
	const allMarkdownFiles = import.meta.glob('/src/routes/languages/xhtml/*.md');
	const iterableMarkdownFiles = Object.entries(allMarkdownFiles);

	const allFiles = await Promise.all(
		iterableMarkdownFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const filePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: filePath
			};
		})
	);

	return allFiles;
};


export const fetchReportsFiles = async () => {
	const allMarkdownFiles = import.meta.glob('/src/routes/reports/*.md');
	const iterableMarkdownFiles = Object.entries(allMarkdownFiles);

	const allFiles = await Promise.all(
		iterableMarkdownFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const filePath = path.slice(11, -3);

			return {
				meta: metadata,
				path: filePath
			};
		})
	);

	return allFiles;
};