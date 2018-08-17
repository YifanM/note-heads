import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  item: {
    backgroundColor: '#f5f5dc',
    borderColor: '#000',
    elevation: 5,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 3,
    margin: 15,
    marginTop: 5,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 0.5
  },
  buttonWrapper: {
    position: 'absolute',
    top: 16,
    right: 205,
    elevation: 25,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff5151',
  }
});