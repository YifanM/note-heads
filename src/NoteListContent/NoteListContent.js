import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import NoteItem from '../NoteItem/NoteItem';

const mapStateToProps = (state) => ({
  notes: state.notes.list
})

class NoteListContent extends React.Component {
  render() {
    const { navigation, notes } = this.props;
    let noteItems = [];
    if (notes) {
      noteItems = notes.map((note, index) => (
        <NoteItem key={note.name} navigation={navigation} name={note.name} index={index} />
      ));
    }
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          { noteItems }
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(NoteListContent);