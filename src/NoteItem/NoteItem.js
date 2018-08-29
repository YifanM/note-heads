import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
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
    const { index, deleteNote, note } = this.props;
    // delete from RNFS
    RNFS.unlink(`${RNFS.DocumentDirectoryPath}/${note.name}.note.txt`)
      .then(() => deleteNote(index))
      .catch(() => console.log('error in deleting'));
  }

  render() {
  	const { note } = this.props;
    return (
      <View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}>  
          <Text numberOfLines={1} style={{
            color: 'black',
            fontSize: 20,
            width: 140,
            textAlign: 'center'
          }}>
            {note.name}
          </Text>
            <TouchableOpacity style={styles.buttonWrapper} onPress={this.handleDelete}>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={styles.buttonText}>x</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.handleOpen}>
        	<View style={styles.item}>
            <View style={{ padding: 20 }}>
              <Text style={{}} numberOfLines={12}>{note.content}</Text>
            </View>
        	</View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
