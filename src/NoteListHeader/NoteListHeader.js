import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from 'react-native-button';
import styles from './styles';

import CreateNoteModal from '../CreateNoteModal/CreateNoteModal';

export default class NoteListHeader extends React.Component {
	state = {
		modalVisible: false
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

  render() {
  	const { navigation } = this.props;
    return (
    	<View style={styles.header}>
	  		<CreateNoteModal visible={this.state.modalVisible} navigation={navigation} onPress={() => this.setModalVisible(false)} />
        <Button style={[styles.button, { marginTop: StatusBar.currentHeight }]} onPress={() => this.setModalVisible(true)}>
          New Note
        </Button>
      </View>
    );
  }
}