import React from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import NoteItem from '../NoteItem/NoteItem';

const mapStateToProps = (state) => ({
  notes: state.notes.list,
  index: state.notes.scrollTo
})

class NoteListContent extends React.Component {
  componentDidUpdate() {
    const { index } = this.props;

    this.scrollToNote(index);
  }

  scrollToNote(index) {
    this._scrollView.scrollTo({ y: index*(60 + Dimensions.get('window').height / 3), animated: true });  
  }

  render() {
    const { navigation, notes } = this.props;
    let noteItems = [];
    if (notes) {
      noteItems = notes.map((note, index) => (
        <NoteItem key={note.name} navigation={navigation} note={note} index={index} />
      ));
    }

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer} ref={view => this._scrollView = view}>
          { noteItems }
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps, null)(NoteListContent);