import React from 'react';
import { Text, View, Button, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

export default class NoteListHeader extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <Button style={styles.button} title="hello" onPress={() => navigation.navigate('Note')}/>
      </View>
    );
  }
}