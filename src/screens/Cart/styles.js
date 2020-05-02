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
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    color: '#E60014',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#E60014',
    width: '100%',
    padding: 10,
    zIndex: 2,
  },
  wrapPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  totalPrice: {
    color: '#FFFFFFFF',
  },
  continueButton: {
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
    backgroundColor: '#FFFFFFFF',
    color: '#E60014',
    fontWeight: 'bold',
    width: '100%',
  },
  emptyBasket: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#E60014',
    fontSize: 25,
    paddingTop: '50%',
  },
});
