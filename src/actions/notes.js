export default {
	readNotes: (notes) => ({ type: 'READ_NOTES', notes }),
	deleteNote: (index) => ({ type: 'DELETE_NOTE', index }),
	openNote: (index) => ({ type: 'OPEN_NOTE', index }),
	updateCurrentNote: (name, content) => ({ type: 'UPDATE_CURRENT_NOTE', name, content }),
	createNote: (name, content) => ({ type: 'CREATE_NOTE', name, content })
}