import React from 'react';
import { Text, View, Button, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation';
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
        <Button style={styles.button} title="hello" onPress={() => this.setModalVisible(true)} />
      </View>
    );
  }
}