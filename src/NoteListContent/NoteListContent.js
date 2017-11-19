import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';

import NoteListHeader from '../NoteListHeader/NoteListHeader';

export default class NoteList extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text>asdasdasd</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        </ScrollView>
      </View>
    );
  }
}