const currentNote = {};

export default {
	setNote: (note) => { currentNote = JSON.parse(JSON.stringify(note)); },
	getNote: () => currentNote
}