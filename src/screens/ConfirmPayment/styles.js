import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  ConfirmPayment: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    color: '#E60014',
    fontWeight: 'bold',
  },
  message: {
    color: '#8A8A8A',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  footer: {
    backgroundColor: '#E60014',
    width: '80%',
    padding: 5,
    zIndex: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  continueButton: {
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
    backgroundColor: '#E60014',
    color: '#FFFFFFFF',
    fontWeight: 'bold',
    width: '100%',
  },
});
