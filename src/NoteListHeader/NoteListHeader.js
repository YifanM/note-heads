import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, Button, TouchableNativeFeedback } from 'react-native';
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
    	<View style={{minHeight: 0}}>
	  		<CreateNoteModal visible={this.state.modalVisible} navigation={navigation} onPress={() => this.setModalVisible(false)} />
				<TouchableOpacity style={styles.add_button}>
					<View style={styles.add_button_view}>
						<Text style={styles.text}>	
							+
						</Text>	
					</View>
				</TouchableOpacity>
      </View>
    );
  }
}