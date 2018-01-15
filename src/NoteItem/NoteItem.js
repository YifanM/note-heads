import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import Button from 'react-native-button';
import RNFS from 'react-native-fs';

import styles from './styles';

import noteActions from '../actions/notes';
import currentNote from '../currentNote';

const mapStateToProps = (state) => ({
  notes: state.notes.list
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (index) => dispatch(noteActions.deleteNote(index)),
    openNote: (index) => dispatch(noteActions.openNote(index))
  };
};

class NoteItem extends React.Component {
  constructor() {
    super();
    this.handleOpen = this.handleOpen.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleOpen() {
    const { navigation, index, openNote, notes } = this.props;
    openNote(index);
    currentNote.setNote(notes[index]);
    navigation.navigate('Note');
  }

  handleDelete() {
    const { index, deleteNote, name } = this.props;
    // delete from RNFS
    RNFS.unlink(`${RNFS.DocumentDirectoryPath}/${name}.note.txt`)
      .then(() => deleteNote(index))
      .catch(() => console.log('error in deleting'));
  }

  render() {
  	const { name } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this.handleOpen}>
        	<View style={styles.item}>
            <Text>{ name }</Text>
        	</View>
        </TouchableOpacity>
        <View>
          <Button style={styles.button} onPress={this.handleDelete}>
            Delete
          </Button>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);