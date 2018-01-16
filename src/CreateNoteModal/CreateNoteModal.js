import React from 'react';
import { Text, TextInput, View, Modal } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import RNFS from 'react-native-fs';

import styles from './styles';
import noteActions from '../actions/notes';

const mapDispatchToProps = (dispatch) => ({
  updateCurrentNote: (name, content) => dispatch(noteActions.updateCurrentNote(name, content)),
  createNote: (name, content) => dispatch(noteActions.createNote(name, content))
});

class CreateNoteModal extends React.Component {

  constructor() {
    super();
    this.state = { fileName: '' };
    this.createNote = this.createNote.bind(this);
  }

  createNote() {
    const fileName = this.state.fileName;
    if (fileName) {
      const { navigation, onPress } = this.props;
      RNFS.writeFile(`${RNFS.DocumentDirectoryPath}/${fileName}.note.txt`, '', 'utf8')
        .then(() => {
          const { updateCurrentNote, createNote } = this.props;
          updateCurrentNote(fileName, '');
          createNote(fileName, '');
          onPress();
          navigation.navigate('Note');
        })
        .catch((e) => {
          console.log(e.message);
          console.log('could not create file');
        });
    }
  }

  render() {
  	const { visible } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {}}>
        <View style={styles.modal}>
          <Text>Name your note:</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => this.setState({ fileName: text })} />
          <Button onPress={this.createNote}>
            Create
          </Button>
        </View>
      </Modal>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateNoteModal);