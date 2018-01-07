import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Interactable from 'react-native-interactable';
import styles from './styles';

import NoteItem from '../NoteItem/NoteItem';

export default class NoteList extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
    {/* Since a press event seems to be unavailable, hacky method use both drag and snap and record time since first drag as a press?*/}
        <Interactable.View
          onSnap={() => console.log("snap")}
          snapPoints={[
            {x: -140, y: -250},
            {x: 140, y: -250},
            {x: -140, y: -120},
            {x: 140, y: -120},
            {x: -140, y: 0},
            {x: 140, y: 0},
            {x: -140, y: 120},
            {x: 140, y: 120},
            {x: -140, y: 250},
            {x: 140, y: 250, tension: 50, damping: 0.9}
          ]}
          initialPosition={{x: -140, y: -250}}>
          <View onPress={() => console.log("asad")} style={{width: 70, height: 70, backgroundColor: 'red', borderRadius: 35}} />
        </Interactable.View>
      </View>
    );
  }
}

/*
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
          <NoteItem navigation={navigation} />
        </ScrollView>
        */