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
    alignSelf: 'stretch',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: '#f5f5dc',
    elevation: 5
  },
  textInput: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 20
  },
  button: {
    textAlign: 'center',
    fontSize: 30,
    elevation: 1,
    color: 'white',
    backgroundColor: '#639fff',
    paddingRight: 30,
    paddingLeft: 30,
    marginBottom: 20,
    marginTop: 20
  }
});