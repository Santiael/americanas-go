import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import { store } from '../../store';
import { setDiscount } from '../../store/actionCreators';

import WhiteArrow from '../../assets/icons/white-arrow.svg';
import FlagCard from '../../assets/icons/flag-card.svg';

import styles from './styles';

export default function Payment({ navigation }) {
  const { state, dispatch } = useContext(store);
  const [value, setValue] = useState();

  function donePayment() {
    navigation.navigate('ConfirmPayment');
  }

  function sale(code) {
    if (String(code).toUpperCase() === 'PROMO20') {
      dispatch(setDiscount(state.cartTotal * 0.2));
    } else dispatch(setDiscount(0));
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <WhiteArrow width={32} />
        </TouchableOpacity>
        <Text style={styles.text}> Pagamentos</Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.creditCard}>
            <FlagCard style={styles.flagCard} />
            <View style={styles.fieldsCard}>
              <Text style={styles.titleCard}>JHON A FILHO </Text>
              <Text style={styles.textCard}>XXXX XXXX XXXX 101 </Text>
              <Text style={styles.dataCard}>07/25 </Text>
              <Text style={styles.defaultCard}>(padrão) </Text>
            </View>
          </View>
          <View style={styles.wrapGift}>
            <Text style={styles.textGift}>Possui cupom ou vale?</Text>
            <TextInput
              onChangeText={(text) => setValue(text)}
              value={value}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
            <TouchableOpacity onPress={() => sale(value)}>
              <Text style={styles.applyButton}>Aplicar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.wrapPrice}>
          <Text style={styles.totalPrice}>Total do pedido</Text>
          <Text style={styles.totalPrice}>{`R$ ${state.paymentTotal}`}</Text>
        </View>
        <TouchableOpacity onPress={donePayment}>
          <Text style={styles.continueButton}>Realizar Pagamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
