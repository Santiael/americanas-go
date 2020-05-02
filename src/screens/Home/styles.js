import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightestGray,
  },
  header: {
    paddingTop: Constants.statusBarHeight + 15,
    paddingBottom: 15,
    backgroundColor: colors.lightGray,
    fontSize: 32,
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    width: 345,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginTop: 16,
    padding: 9,
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 18,
    marginLeft: 8,
    marginRight: 16,
  },
  slider: {
    flexGrow: 0,
  },
  categoryContainer: {
    marginHorizontal: 7,
  },
  categoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.lightGray,
  },
  categoryLabel: {
    height: 20,
    backgroundColor: colors.lightGray,
    marginTop: 10,
  },
  promoContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  smallBox: {
    height: 40,
    width: '100%',
    backgroundColor: colors.lightGray,
    marginBottom: 25,
  },
  bigBox: {
    height: 300,
    width: '100%',
    backgroundColor: colors.lightGray,
    marginBottom: 25,
    borderRadius: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});
