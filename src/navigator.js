import React, { Component } from 'react';
import { AppState } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import NoteList from './NoteList/NoteList';
import Note from './Note/Note';
import Notehead from './Noteheads.js';
import currentNote from './currentNote';

const Navigator = StackNavigator({
  initialRouteName: { screen: NoteList, navigationOptions: { header: null } },
  NoteList: { screen: NoteList, navigationOptions: { header: null } },
  Note: { screen: Note, navigationOptions: { header: null } },
});

class ConnectedNavigator extends Component {
	constructor() {
		super();
		this.state = { handleChange: (appState) => { this.handleAppStateChange(appState, currentNote) } };
	}

	componentDidMount() {
		AppState.addEventListener('change', this.state.handleChange);
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this.state.handleChange);
	}

	handleAppStateChange(nextAppState, currentNote) {
		// nothing is accessible in this method for some reason, all this is a workaround

		const note = currentNote.getNote();
		const noteExists = this.props.notes.reduce((acc, curr) => acc || curr.name === note.name, false);
		if (noteExists && nextAppState === 'background' && note.name) {
			Notehead.openNotehead(note.name, note.content);
		} else if (nextAppState === 'active') {
			Notehead.closeNotehead('', '');
		}
	}

	render() {
		return (<Navigator />);
	}
}

const mapStateToProps = state => ({
	notes: state.notes.list
})

export default connect(mapStateToProps, null)(ConnectedNavigator);
