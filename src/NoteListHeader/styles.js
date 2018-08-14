import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  add_button_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  add_button: {
    backgroundColor: '#17d167',
    position: 'absolute',
    top: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    zIndex: 10,
    elevation: 5
  },
  text: {
    fontSize: 45,
    marginLeft: 2,
    marginBottom: 2,
    color: 'white'
  }
});