import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
  },
  main: {
    flex: 1,
    alignItems: 'center',
  },
  messageContainer: {
    justifyContent: 'center',
  },
  title: {
    color: colors.primaryColor,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  message: {
    color: colors.darkGray,
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  finishButton: {
    alignItems: 'center',
    width: 250,
    marginTop: 20,
    padding: 20,
    fontSize: 18,
    backgroundColor: colors.primaryColor,
    borderRadius: 3,
  },
  finishButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
