import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: colors.black,
  },
  scannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerOverlay: {
    position: 'absolute',
  },
  scanner: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.primaryColor,
    paddingTop: 75 - Constants.statusBarHeight,
    paddingBottom: 75,
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
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
  footer: {
    position: 'absolute',
    width: '100%',
    height: 140,
    backgroundColor: colors.primaryColor,
    bottom: 0,
  },
});
