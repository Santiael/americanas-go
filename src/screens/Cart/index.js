import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { store } from '../../store';
import {
  addProduct,
  removeProduct,
  deleteProduct,
} from '../../store/actionCreators';
import Product from '../../components/Product';

import Arrow from '../../assets/icons/left-arrow.svg';

import styles from './styles';

export default function Cart() {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(store);
  function goPayments() {
    navigation.navigate('Payments');
  }
  function addItem(product) {
    return () => dispatch(addProduct(product));
  }

  function removeItem(id) {
    return () => dispatch(removeProduct(id));
  }

  function deleteItem(id) {
    return () => dispatch(deleteProduct(id));
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Arrow width={25} />
          </TouchableOpacity>
          <Text style={styles.text}> Cesta de Compras</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {state.products.length ? (
            state.products.map((product) => (
              <Product
                key={product.id}
                data={product}
                onAdd={addItem(product)}
                onRemove={removeItem(product.id)}
                onDelete={deleteItem(product.id)}
              />
            ))
          ) : (
            <Text style={styles.emptyBasket}>Carrinho Vazio!</Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.wrapPrice}>
          <Text style={styles.totalPrice}>Total do pedido</Text>
          <Text style={styles.totalPrice}>
            R$
            {state.products
              .reduce((acc, item) => acc + item.price * item.amount, 0)
              .toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity onPress={goPayments}>
          <Text style={styles.continueButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
