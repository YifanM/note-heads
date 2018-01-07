import React, { Component } from 'react';
import { AppState } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './src/reducers/index';
import NoteList from './src/NoteList/NoteList';
import Note from './src/Note/Note';

import Notehead from './src/Noteheads.js';

const Navigator = StackNavigator({
  initialRouteName: { screen: NoteList, navigationOptions: { header: null } },
  NoteList: { screen: NoteList, navigationOptions: { header: null } },
  Note: { screen: Note, navigationOptions: { header: null } },
});

export default class App extends Component {
	componentDidMount() {
		AppState.addEventListener('change', this.handleAppStateChange);
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this.handleAppStateChange);
	}

	handleAppStateChange(nextAppState) {
		if (nextAppState === 'background') {
			Notehead.openNotehead();
		}
	}

	render() {
		const store = createStore(reducers, applyMiddleware(thunkMiddleware));

		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		);
	}
}