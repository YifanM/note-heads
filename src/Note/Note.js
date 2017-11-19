import React from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export default class Note extends React.Component {
  render() {
  	const { navigation } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'NoteList' })
      ]
    });
    return (
    	<View style={styles.container}>
    		<Button title="go back" onPress={() => navigation.dispatch(resetAction)} />
    	</View>
    );
  }
}