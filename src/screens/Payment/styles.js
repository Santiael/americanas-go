import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../constants/colors';

const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  container: {
    flex: 1,
    minHeight: screenHeight,
    backgroundColor: colors.white,
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: colors.primaryColor,
    elevation: 5,
  },
  arrowBack: {
    position: 'absolute',
    left: 15,
  },
  pageTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentOptions: {
    flex: 1,
  },
  voucher: {
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  voucherInputText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  voucherInput: {
    width: '100%',
    marginBottom: 15,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 5,
  },
  voucherButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    color: colors.white,
    backgroundColor: colors.primaryColor,
    borderRadius: 3,
  },
  voucherButtonText: {
    color: colors.white,
    fontSize: 16,
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
});
