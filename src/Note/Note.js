import React from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Keyboard } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import RNFS from 'react-native-fs';

import styles from './styles';
import noteActions from '../actions/notes';
import currentNote from '../currentNote';

const mapStateToProps = (state) => ({
  name: state.notes.current.name,
  text: state.notes.current.content
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentNote: (name, content) => dispatch(noteActions.updateCurrentNote(name, content))
});

class Note extends React.Component {
  constructor(props) {
    super()
    this.updateNote = this.updateNote.bind(this);
    const { text } = props;
    this.state = { text };
  }

  updateNote() {
    const { navigation, name } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'NoteList' })
      ]
    });
    const text = this.state.text;
    RNFS.writeFile(`${RNFS.DocumentDirectoryPath}/${name}.note.txt`, text)
      .then(() => {
        const { updateCurrentNote } = this.props;
        updateCurrentNote(name, text);
        currentNote.setNote({ name, content: text });
        navigation.dispatch(resetAction);
      })
      .catch(() => {});
  }

  render() {
  	const { name, text } = this.props;
    return (
    	<View style={[styles.container]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1, alignSelf: 'stretch' }}>
          <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 20 }}>
                { name }
              </Text>
            </View>
            <View style={styles.textInputWrapper}>
              <TextInput
                underlineColorAndroid="transparent"
                textAlignVertical="top"
                style={styles.textInput}
                multiline
                returnKeyType="none"
                blurOnSubmit={false}
                onChangeText={(text) => this.setState({ text })}>
                { text }
              </TextInput>
            </View>
            <TouchableOpacity onPress={this.updateNote} style={{ width: 200 }}>
              <View>
                <Text style={styles.button}>
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
    	</View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);