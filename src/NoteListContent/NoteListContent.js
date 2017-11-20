import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';

import NoteItem from '../NoteItem/NoteItem';

export default class NoteList extends React.Component {
  // add redux so don't have to read all the note files every time?
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <NoteItem navigation={navigation} />
          <Text>asdasdasd</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </ScrollView>
      </View>
    );
  }
}