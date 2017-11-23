import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';

import NoteItem from '../NoteItem/NoteItem';

export default class NoteList extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
        </ScrollView>
      </View>
    );
  }
}