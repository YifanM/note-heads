import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputWrapper: {
  	flex: 1,
    borderWidth: 2,
    alignSelf: 'stretch',
    marginRight: 10,
    marginLeft: 10
  },
  textInput: {
    flex: 1,
    alignSelf: 'stretch'
  },
  button: {
    fontSize: 30
  }
});