import React from 'react';
import { Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export default class NoteItem extends React.Component {
  render() {
  	const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Note')}>
      	<View style={styles.item}>
          <Text>note name</Text>
      	</View>
      </TouchableOpacity>
    );
  }
}