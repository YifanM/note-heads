import React from 'react';
import { View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RNFS from 'react-native-fs';
import styles from './styles';

import NoteListHeader from '../NoteListHeader/NoteListHeader';
import NoteListContent from '../NoteListContent/NoteListContent';
import NoteSidebar from '../NoteSidebar/NoteSidebar';
import noteActions from '../actions/notes';

const mapDispatchToProps = (dispatch) => {
	return {
    readNotes: (notes) => dispatch(noteActions.readNotes(notes))
  };
};

const scrollTo = (index) => {

};

class NoteList extends React.Component {
  componentWillMount() {
    const notesList = [];
    RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then((results) => Promise.all(results.map((result) => result.path)))
      .then((pathResults) => {
        const noteFiles = pathResults.filter((file) => {
          if (file.contains('note.txt')) {
            return true;
          }
        });
        return Promise.all(noteFiles.map((noteFile) => {
          notesList.push({
            name: noteFile.substring(noteFile.indexOf('files/') + 6, noteFile.indexOf('note.txt') - 1),
            content: null
          });
          return RNFS.readFile(noteFile, 'utf8');
        }));
      })
      .then((notes) => {
        const { readNotes } = this.props;
        notes.forEach((note, index) => {
          notesList[index].content = note;
        });
        readNotes(notesList);
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  }

  render() {
  	const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <NoteSidebar />
          <NoteListContent navigation={navigation} />
          <NoteListHeader navigation={navigation} />
        </View>
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(NoteList);