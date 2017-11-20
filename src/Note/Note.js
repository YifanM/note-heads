import React from 'react';
import { Text, Button, View, TextInput, TouchableWithoutFeedback } from 'react-native';
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
        <TextInput style={styles.size} />
        <TouchableWithoutFeedback onPress={(e) => console.log(e.nativeEvent.locationX, e.nativeEvent.locationY)}>
          <View>
            <Text style={styles.size}>hello</Text>
          </View>
        </TouchableWithoutFeedback>
    		<Button title="go back" onPress={() => navigation.dispatch(resetAction)} />
    	</View>
    );
  }
}
