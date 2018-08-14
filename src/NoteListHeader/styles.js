import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  add_button_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  add_button: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    zIndex: 10
  },
  text: {
    fontSize: 45,
    color: 'black'
  }
});