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
import payments from '../../constants/payments';

import WhiteArrow from '../../assets/icons/white-arrow.svg';

import PaymentOption from '../../components/PaymentOption';

import styles from './styles';

export default function Payment({ navigation }) {
  const { state, dispatch } = useContext(store);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [voucher, setVoucher] = useState();

  function donePayment() {
    if (paymentMethod === null)
      // eslint-disable-next-line
      alert('Selecione um método de pagamento.');
    else navigation.navigate('ConfirmPayment');
  }

  function applyVoucher() {
    if (String(voucher).toUpperCase() === 'PROMO20') {
      dispatch(setDiscount(state.cartTotal * 0.2));
    } else dispatch(setDiscount(0));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowBack}
          activeOpacity={0.6}
          onPress={navigation.goBack}
        >
          <WhiteArrow width={25} />
        </TouchableOpacity>

        <Text style={styles.pageTitle}>pagamento</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selecione o método de pagamento</Text>
        </View>

        <View style={styles.paymentOptions}>
          {payments.map(({ type, payment, icon }, index) => (
            <PaymentOption
              key={`${type}-${index}`}
              type={type}
              text={payment}
              icon={icon}
              selected={paymentMethod === index}
              onPress={() => setPaymentMethod(index)}
            />
          ))}
        </View>

        <View style={styles.voucher}>
          <Text style={styles.voucherInputText}>Possui cupom ou vale?</Text>

          <TextInput
            style={styles.voucherInput}
            value={voucher}
            onChangeText={setVoucher}
            onSubmitEditing={applyVoucher}
          />

          <TouchableOpacity
            style={styles.voucherButton}
            activeOpacity={0.8}
            onPress={applyVoucher}
          >
            <Text style={styles.voucherButtonText}>aplicar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={[styles.price, { marginBottom: 15 }]}>
          <Text style={styles.priceText}>Desconto:</Text>

          <Text style={styles.priceValue}>
            {`R$ ${Number(state.discount) ? `-${state.discount}` : 0}`}
          </Text>
        </View>
        <View style={[styles.price, { marginBottom: 25 }]}>
          <Text style={styles.priceText}>Total do pedido:</Text>

          <Text style={styles.priceValue}>{`R$ ${state.paymentTotal}`}</Text>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.8}
          onPress={donePayment}
        >
          <Text style={styles.continueText}>realizar pagamento</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
