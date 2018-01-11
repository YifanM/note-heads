import React from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Button from 'react-native-button';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import RNFS from 'react-native-fs';

import styles from './styles';
import noteActions from '../actions/notes';

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
        navigation.dispatch(resetAction);
      })
      .catch(() => {});
  }

  render() {
  	const { text } = this.props;
    return (
    	<View style={[styles.container, { marginTop: StatusBar.currentHeight }]}>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            multiline
            returnKeyType="none"
            blurOnSubmit={false}
            onChangeText={(text) => this.setState({ text })}>
            { text }
          </TextInput>
        </View>
        {/*<TouchableWithoutFeedback onPress={(e) => console.log(e.nativeEvent.locationX, e.nativeEvent.locationY)}>
          <View>
            <Text style={styles.size}>hello</Text>
          </View>
        </TouchableWithoutFeedback>*/}
      {/* use rnfs to write current note */}
    		<Button onPress={this.updateNote} style={styles.button}>
          Save and Exit
        </Button>
    	</View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);