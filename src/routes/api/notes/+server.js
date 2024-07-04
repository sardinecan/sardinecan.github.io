// src/routes/api/notes/+server.js
import { fetchNotesFiles } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allNotes = await fetchNotesFiles();

	const sortedNotes = allNotes.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedNotes);
};