import React from 'react';
import { Text, Button, TextInput, View, Modal } from 'react-native';
import { NavigationActions } from 'react-navigation';

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
        <View>
          <Text>Name your note</Text>
          <TextInput />
          <Button title="create" onPress={this.createNote} />
        </View>
      </Modal>
    );
  }
}