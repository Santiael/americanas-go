import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { store } from '../../store';
import { clearCart } from '../../store/actionCreators';

import Person from '../../assets/icons/person.svg';
import BarCode from '../../assets/icons/webcode.svg';

import styles from './styles';

export default function ConfirmPayment({ navigation }) {
  const { dispatch } = useContext(store);

  function goInitial() {
    dispatch(clearCart());
    navigation.navigate('HomeRoot');
  }

  return (
    <View style={styles.container}>
      <Person />

      <View style={styles.messageContainer}>
        <Text style={styles.title}>Pagamento Realizado com Sucesso</Text>

        <Text style={styles.message}>
          Sua compra foi aprovada com sucesso, apresente o código no totem de
          confirmação
        </Text>

        <Text style={styles.message}>
          Código de barra para suas compras serem liberadas pelo sistema
        </Text>
      </View>

      <BarCode style={{ transform: [{ translateX: -5 }] }} />

      <TouchableOpacity style={styles.finishButton} onPress={goInitial}>
        <Text style={styles.finishButtonText}>voltar ao início</Text>
      </TouchableOpacity>
    </View>
  );
}
