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
    navigation.navigate('Payments', {
      listItem: state.products
        .reduce((acc, item) => acc + item.price * item.amount, 0)
        .toFixed(2),
    });
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

  React.useEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          paddingVertical: 7.5,
          paddingHorizontal: 15,
        }}
      >
        {state.products.length ? (
          state.products.map((product) => (
            <View key={product.id} style={styles.productWrapper}>
              <Product
                data={product}
                onAdd={addItem(product)}
                onRemove={removeItem(product.id)}
                onDelete={deleteItem(product.id)}
              />
            </View>
          ))
        ) : (
          <View style={styles.emptyTextWrapper}>
            <Text style={styles.emptyText}>{`Carrinho Vazio${'  '}:(`}</Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.price}>
          <Text style={styles.priceText}>Total do pedido:</Text>

          <Text style={styles.priceValue}>
            R$
            {state.products
              .reduce((acc, item) => acc + item.price * item.amount, 0)
              .toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.8}
          onPress={goPayments}
        >
          <Text style={styles.continueText}>continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
