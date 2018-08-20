import React from 'react';
import { Text, TextInput, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';
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
        transparent={true}
        visible={visible}
        onRequestClose={this.props.onPress}>
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAvoidingView style={styles.modal} behavior={"padding"}>
              <View>
                <TouchableOpacity style={styles.buttonWrapper} onPress={this.props.onPress}>
                    <View style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <Text style={styles.buttonText}>x</Text>
                    </View>
                </TouchableOpacity>
                <KeyboardAvoidingView style={{ height: 150, width: 300, backgroundColor: '#f9f9f9', elevation: 20 }} behavior="padding">  
                  <TextInput style={styles.textInput} onChangeText={(text) => this.setState({ fileName: text })} />
                  <TouchableOpacity disabled={!this.state.fileName} onPress={this.createNote}>
                    <View style={{}}>
                      <Text style={{ elevation: 1, color: !this.state.fileName ? '#dddddd' : 'white', fontSize: 20, backgroundColor: !this.state.fileName ? '#eeeeee' : '#17d167', marginBottom: 40, marginLeft: 60, marginRight: 60, textAlign: 'center' }}>Create</Text>
                    </View>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateNoteModal);