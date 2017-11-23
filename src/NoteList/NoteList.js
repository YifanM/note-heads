import React from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';

import NoteListHeader from '../NoteListHeader/NoteListHeader';
import NoteListContent from '../NoteListContent/NoteListContent';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch);
};

class NoteList extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);