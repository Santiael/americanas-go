import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RemoveIcon from '../../assets/icons/remove-icon.svg';
import Person from '../../assets/icons/person.svg';
import BarCode from '../../assets/icons/webcode.svg';
// import FlagCard from '../../assets/icons/flag-card.svg';
import styles from './styles';

export default function ConfirmPayment() {
  const navigation = useNavigation();

  function goInitial() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goInitial}>
          <RemoveIcon width={30} height={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Person />
        <Text style={styles.ConfirmPayment}>
          Pagamento Realizado com Sucesso
        </Text>
        <Text style={styles.message}>
          Sua compra foi aprovada com sucesso, apresente o código no totem de
          confirmação
        </Text>
        <Text style={styles.message}>
          Código de barra para suas compras serem liberadas pelo sistema
        </Text>
        <BarCode />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={goInitial}>
          <Text style={styles.continueButton}>Voltar ao Inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
