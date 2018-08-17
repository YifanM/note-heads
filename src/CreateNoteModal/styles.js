import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    alignSelf: 'stretch',
    margin: 30,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 0.5
  },
  buttonWrapper: {
    position: 'absolute',
    top: -15,
    right: -15,
    elevation: 25,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff5151',
  }
});