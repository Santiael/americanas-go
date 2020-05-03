import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.white,
    elevation: 5,
  },
  arrowBack: {
    position: 'absolute',
    left: 15,
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 18,
    color: colors.primaryColor,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    padding: 20,
    backgroundColor: colors.primaryColor,
    elevation: 5,
  },
  productList: {
    flex: 1,
  },
  productWrapper: {
    marginVertical: 7.5,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  priceText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  priceValue: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  continueButton: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  continueText: {
    color: colors.primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyTextWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: colors.primaryColor,
    fontSize: 25,
  },
});
