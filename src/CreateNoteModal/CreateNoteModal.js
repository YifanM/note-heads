import React from 'react';
import { Text, TextInput, View, Modal } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from 'react-native-button';

import styles from './styles';

export default class CreateNoteModal extends React.Component {
  constructor() {
    super();
    this.createNote = this.createNote.bind(this);
  }

  createNote() {
    const { navigation, onPress } = this.props;
    onPress();
    navigation.navigate('Note');
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
          <TextInput style={styles.textInput}/>
          <Button onPress={this.createNote}>
            Create
          </Button>
        </View>
      </Modal>
    );
  }
}