export default (state = { list: [], current: {} }, action) => {
	let newState = JSON.parse(JSON.stringify(state));;
	switch (action.type) {
		case ('READ_NOTES'):
			newState.list = action.notes;
			break;
		case ('DELETE_NOTE'):
			newState.list.splice(action.index, 1);
			break;
		case ('OPEN_NOTE'):
			newState.current = newState.list[action.index];
			break;
		case ('UPDATE_CURRENT_NOTE'):
			newState.current.name = action.name;
			newState.current.content = action.content;
		case ('CREATE_NOTE'):
			newState.list.push({ name: action.name, content: action.content });
		default:
	}
	return newState;
}