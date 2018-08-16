import React from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import noteActions from '../actions/notes';

class NoteSidebar extends React.Component {
  render() {
    const { notes, scrollTo } = this.props;
    let noteItems = [];
    if (notes) {
      noteItems = notes.map((note, index) => (
          <View style={{
            borderColor: '#eeeeee',
            borderBottomWidth: 6,
          }} key={note.name}>
            <TouchableOpacity onPress={() => scrollTo(index)}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    height: 60,
                    backgroundColor: '#e6e6e6',
                }}>
                    <Text numberOfLines={1} style={styles.text}>{note.name}</Text>
                </View>
            </TouchableOpacity>
          </View>
      ));
    }

    return (
    	<View style={styles.wrapper}>
            <ScrollView>{noteItems}</ScrollView>
        </View>
    );
  }
}

const mapStateToProps = state => ({
    notes: state.notes.list
});

const mapDispatchToProps = dispatch => ({
    scrollTo: (index) => dispatch(noteActions.scrollTo(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteSidebar);