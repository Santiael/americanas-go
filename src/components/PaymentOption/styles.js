import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default (selected = false) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 5,
      backgroundColor: selected ? '#F5F5F5' : 'transparent',
      elevation: selected ? 4 : 0,
    },
    type: {
      marginBottom: 2,
      fontWeight: 'bold',
    },
    text: {
      color: colors.darkGray,
      fontWeight: 'bold',
    },
  });
