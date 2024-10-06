export const fetchBlogFiles = async () => {
	const allMarkdownFiles = import.meta.glob('/src/routes/blog/*.md');
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

export const fetchNotesFiles = async () => {
	const allMarkdownFiles = import.meta.glob('/src/routes/notes/*.md');
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


//export const fetchCheatsheetFiles = async () => {
//    const allMarkdownFiles = import.meta.glob('/src/routes/cheatsheets/*/*.md');
//    const iterableMarkdownFiles = Object.entries(allMarkdownFiles);

//    const allFiles = await Promise.all(
//        iterableMarkdownFiles.map(async ([path, resolver]) => {
//            const { metadata } = await resolver();

            // Utilisation d'une expression régulière pour capturer la valeur du répertoire
//            const match = path.match(/\/cheatsheets\/([^/]+)\//);
//            const category = match ? match[1] : null;

            // Extraction du chemin sans le prefix et suffix
//            const filePath = path.slice(11, -3);

//            return {
//                meta: metadata,
//                path: filePath,
//                category: category
//            };
//        })
//    );

//    return allFiles;
//};

