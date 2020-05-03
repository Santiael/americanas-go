import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { store } from '../../store';
import {
  removeProduct,
  increaseAmount,
  decreaseAmount,
} from '../../store/actionCreators';
import Product from '../../components/Product';

import Arrow from '../../assets/icons/left-arrow.svg';

import styles from './styles';

export default function Cart({ navigation }) {
  const { state, dispatch } = useContext(store);

  function goPayment() {
    navigation.navigate('Payment');
  }
  function addItem(id) {
    return () => dispatch(increaseAmount(id));
  }

  function removeItem(id) {
    return () => dispatch(decreaseAmount(id));
  }

  function deleteItem(id) {
    return () => dispatch(removeProduct(id));
  }

  useEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrowBack}
          activeOpacity={0.6}
          onPress={navigation.goBack}
        >
          <Arrow width={25} />
        </TouchableOpacity>
        <Text style={styles.title}>cesta de compras</Text>
      </View>

      {state.products.length ? (
        <ScrollView
          style={styles.productList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 7.5,
            paddingHorizontal: 15,
          }}
        >
          {state.products.map((product) => (
            <View key={product.id} style={styles.productWrapper}>
              <Product
                data={product}
                onAdd={addItem(product.id)}
                onRemove={removeItem(product.id)}
                onDelete={deleteItem(product.id)}
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyTextWrapper}>
          <Text style={styles.emptyText}>{`Carrinho Vazio${'  '}:(`}</Text>
        </View>
      )}
      {state.products.length ? (
        <View style={styles.footer}>
          <View style={styles.price}>
            <Text style={styles.priceText}>Total do pedido:</Text>

            <Text style={styles.priceValue}>{`R$ ${state.paymentTotal}`}</Text>
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            activeOpacity={0.8}
            onPress={goPayment}
          >
            <Text style={styles.continueText}>continuar</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
