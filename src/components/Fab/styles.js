import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    elevation: 5,
    borderRadius: 32,
    backgroundColor: colors.primaryColor,
  },
  touchable: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
