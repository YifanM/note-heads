import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NoteList from './src/NoteList/NoteList';
import Note from './src/Note/Note';

export default StackNavigator({
  initialRouteName: { screen: NoteList, navigationOptions: { header: null } },
  NoteList: { screen: NoteList, navigationOptions: { header: null } },
  Note: { screen: Note, navigationOptions: { header: null } },
});