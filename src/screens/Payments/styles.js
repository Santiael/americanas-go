import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  main: {
    backgroundColor: '#E60014',
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#E60014',
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    color: '#FFFFFFFF',
    fontWeight: 'bold',
  },
  creditCard: {
    height: '100%',
    maxHeight: 200,
    padding: 10,
    shadowColor: 'black',
    elevation: 5,
    marginBottom: 8,
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: '#aaaaaa',
    overflow: 'hidden',
  },
  flagCard: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  fieldCard: {
    alignItems: 'flex-start',
  },
  titleCard: {
    fontSize: 20,
    color: '#FFFFFFFF',
  },
  textCard: {
    fontSize: 25,
    color: '#FFFFFFFF',
  },
  dataCard: {
    fontSize: 15,
    color: '#FFFFFFFF',
  },
  defaultCard: {
    alignSelf: 'flex-end',
    color: '#FFFFFFFF',
  },
  wrapGift: {
    marginTop: 15,
    justifyContent: 'space-between',
  },
  textGift: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  applyButton: {
    borderColor: 'gray',
    backgroundColor: '#CCCCCC',
    color: 'white',
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 2,
    marginTop: 5,
    fontWeight: 'bold',
    width: '100%',
  },
  footer: {
    backgroundColor: '#E60014',
    width: '100%',
    padding: 10,
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
});
