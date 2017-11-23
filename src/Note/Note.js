import React from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Button from 'react-native-button';
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
    	<View style={[styles.container, { marginTop: StatusBar.currentHeight }]}>
        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInput} multiline />
        </View>
        {/*<TouchableWithoutFeedback onPress={(e) => console.log(e.nativeEvent.locationX, e.nativeEvent.locationY)}>
          <View>
            <Text style={styles.size}>hello</Text>
          </View>
        </TouchableWithoutFeedback>*/}
    		<Button onPress={() => navigation.dispatch(resetAction)} style={styles.button}>
          Save and Exit
        </Button>
    	</View>
    );
  }
}