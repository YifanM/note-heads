import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import NoteListHeader from '../NoteListHeader/NoteListHeader';
import NoteListContent from '../NoteListContent/NoteListContent';

export default class NoteList extends React.Component {
  render() {
  	const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <NoteListHeader navigation={navigation} />
        <NoteListContent navigation={navigation} />
      </View>
    );
  }
}