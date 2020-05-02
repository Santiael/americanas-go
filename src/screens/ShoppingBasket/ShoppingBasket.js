import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Arrow from '../../assets/icons/left-arrow.svg';
import RemoveIcon from '../../assets/icons/remove-icon.svg';
import AddIcon from '../../assets/icons/btn-add.svg';
import MinusIcon from '../../assets/icons/btn-remove.svg';

// FlatList, Image, Text, TouchableOpacity
// import styles 'styles.css';
import styles from './styles';

import products from './products';

export default function ShoppingBasket() {
  const navigation = useNavigation();
  const [listProduct, setListProduct] = useState(products);
  function nagivationBack() {
    navigation.goBack();
  }

  // function add(index) {
  //   setListProduct(
  //     {
  //       listProduct: listProduct.map(
  //         (item, position)  => {
  //           if(index === position)
  //             return item.amount++
  //           return item
  //       })
  //   }
  //   )
  function add(index) {
    setListProduct(
      listProduct.map((obj, i) =>
        index === i ? { ...obj, amount: obj.amount + 1 } : obj
      )
    );
  }
  function minus(index) {
    setListProduct(
      listProduct.map((obj, i) =>
        index === i && obj.amount > 1 ? { ...obj, amount: obj.amount - 1 } : obj
      )
    );
  }

  function removeItemList(index) {
    setListProduct(
      listProduct.filter((obj, i) => {
        if (index === i) return null;
        return obj;
      })
    );
  }

  return (
    <View style={styles.main}>
      {/* <Text style={styles.floatButton}>Float</Text> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={nagivationBack}>
            <Arrow width={25} />
          </TouchableOpacity>
          <Text style={styles.text}> Cesta de Compras</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {listProduct.length ? (
            listProduct.map((item, index) => (
              <View key={item.id} style={styles.basketItem}>
                <View style={styles.wrapItem}>
                  <Image style={styles.imageItem} source={item.source} />
                </View>
                <View>
                  <View style={styles.wrap}>
                    <Text
                      style={styles.titleItem}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.name}
                    </Text>
                    <View style={styles.circleIcon}>
                      <TouchableOpacity onPress={() => removeItemList(index)}>
                        <RemoveIcon
                          style={styles.removeIcon}
                          width={15}
                          height={10}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text style={styles.priceItem}>
                    R$
                    {item.price}
                    /cada
                  </Text>
                  <View style={styles.amountItem}>
                    <TouchableOpacity onPress={() => add(index)}>
                      <AddIcon
                        style={styles.removeIcon}
                        width={15}
                        height={12}
                      />
                    </TouchableOpacity>
                    <Text style={styles.unitItem}>
                      {item.amount}
                      un.
                    </Text>
                    <TouchableOpacity onPress={() => minus(index)}>
                      <MinusIcon
                        style={styles.removeIcon}
                        width={15}
                        height={10}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.emptyBasket}>Carrinho Vazio :( </Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.wrapPrice}>
          <Text style={styles.totalPrice}>Total do pedido</Text>
          <Text style={styles.totalPrice}>
            R$
            {listProduct
              .reduce((acc, item) => acc + item.price * item.amount, 0)
              .toFixed(2)}
          </Text>
        </View>
        <Text style={styles.continueButton}>Continuar</Text>
      </View>
    </View>
  );
}
