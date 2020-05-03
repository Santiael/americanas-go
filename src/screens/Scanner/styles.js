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
  footer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.primaryColor,
    bottom: 0,
  },
});
