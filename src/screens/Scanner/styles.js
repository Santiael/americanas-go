import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../constants/colors';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  header: {
    zIndex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.primaryColor,
    paddingTop: 55,
    paddingBottom: 55,
  },
  navBar: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    left: 15,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: 345,
    height: 45,
    paddingHorizontal: 5,
    backgroundColor: colors.white,
    borderRadius: 5,
    transform: [{ translateY: 22 }],
  },
  searchIcon: {
    marginLeft: 5,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  searchButton: {
    backgroundColor: colors.primaryColor,
  },
  scannerContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerOverlay: {
    position: 'absolute',
  },
  scanner: {
    width: screenWidth,
    height: screenHeight,
  },
  noPermissionText: {
    textAlign: 'center',
    width: '80%',
    marginBottom: 15,
    color: colors.white,
    fontSize: 24,
  },
  noPermissionButton: {
    padding: 8,
    borderRadius: 3,
    backgroundColor: colors.primaryColor,
  },
  noPermissionButtonText: {
    color: colors.white,
    textTransform: 'uppercase',
  },
  addProduct: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    padding: 15,
    paddingTop: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: colors.primaryColor,
  },
  productWrapper: {
    position: 'absolute',
    top: -20,
    width: '100%',
  },
  addProductButton: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  addProductButtonText: {
    color: colors.primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
