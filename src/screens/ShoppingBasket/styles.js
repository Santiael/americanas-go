import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
  },
  floatButton: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    position: 'absolute',
    left: '80%',
    top: '100%',
    zIndex: 1,
    borderRadius: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
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

  img: {
    height: 15,
    width: 15,
  },

  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    color: '#E60014',
    fontWeight: 'bold',
  },

  basketItem: {
    flexDirection: 'row',
    padding: 10,
    shadowColor: 'black',
    elevation: 5,
    marginBottom: 8,
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },

  wrapItem: {
    alignContent: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    height: 100,
    width: 100,
    marginRight: 5,
  },

  imageItem: {
    width: '100%',
    height: '100%',
  },
  wrap: {
    maxWidth: 200,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleItem: {
    marginRight: 50,
    fontSize: 13,
    lineHeight: 24,
    width: '100%',
    fontWeight: 'bold',
    maxWidth: 135,
  },
  circleIcon: {
    borderWidth: 1,
    borderColor: '#8A8A8A',
    borderRadius: 100,
    height: 15,
  },
  removeIcon: {
    marginTop: 1,
  },
  priceItem: {
    marginRight: 60,
    fontSize: 12,
    lineHeight: 30,
    color: '#E60014',
    fontWeight: 'bold',
    maxWidth: 130,
  },
  amountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    marginTop: 15,
    borderRadius: 5,
    width: 90,
    height: 25,
    paddingLeft: 8,
  },
  unitItem: {
    color: '#E60014',
    marginLeft: 5,
    marginRight: 5,
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
  emptyBasket: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#E60014',
    fontSize: 25,
    paddingTop: '50%',
  },
});
