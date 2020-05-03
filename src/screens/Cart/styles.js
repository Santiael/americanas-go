import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../constants/colors';

export default StyleSheet.create({
  main: {
    backgroundColor: colors.white,
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
    color: colors.primaryColor,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: colors.primaryColor,
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
    color: colors.white,
  },
  continueButton: {
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
    backgroundColor: colors.white,
    color: colors.primaryColor,
    fontWeight: 'bold',
    width: '100%',
  },
  emptyBasket: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.primaryColor,
    fontSize: 25,
    paddingTop: '50%',
  },
});
