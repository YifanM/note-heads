import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './src/reducers/index';
import Navigator from './src/navigator';

export default class App extends Component {
	render() {
		const store = createStore(reducers, applyMiddleware(thunkMiddleware));

		if (module.hot) {
			module.hot.accept('./src/reducers', () => {
				const nextReducer = require('./src/reducers/index');
				store.replaceReducer(nextReducer);
			});
		}

		return (
			<Provider store={store}>
				<Navigator testing />
			</Provider>
		);
	}
}