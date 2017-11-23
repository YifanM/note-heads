import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './src/reducers/index';
import NoteList from './src/NoteList/NoteList';
import Note from './src/Note/Note';

const Navigator = StackNavigator({
  initialRouteName: { screen: NoteList, navigationOptions: { header: null } },
  NoteList: { screen: NoteList, navigationOptions: { header: null } },
  Note: { screen: Note, navigationOptions: { header: null } },
});

export default class App extends Component {
	render() {
		const store = createStore(reducers, applyMiddleware(thunkMiddleware));

		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		);
	}
}