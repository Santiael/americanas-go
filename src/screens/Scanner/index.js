import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import produce from 'immer';

import { store } from '../../store';
import { addProduct } from '../../store/actionCreators';

import colors from '../../constants/colors';
import Spinner from '../../components/Spinner';
import Product from '../../components/Product';

import CloseIcon from '../../assets/icons/close.svg';
import SearchIcon from '../../assets/icons/search.svg';
import ScanFrame from '../../assets/images/scan-frame.svg';
import ProductImage from '../../assets/images/sample-product.jpg';

import styles from './styles';

const { BarCodeType } = BarCodeScanner.Constants;

export default function Scanner({ navigation }) {
  const { state, dispatch } = useContext(store);
  const [hasPermission, setHasPermission] = useState(null);
  const [product, setProduct] = useState(null);

  async function requestPermission() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  function handleScan({ data }) {
    const productFound = state.products.find((p) => p.id === data);

    setProduct(
      productFound || {
        id: data,
        name: 'Caixa Surpresa',
        price: 99.99,
        amount: 1,
        stock: 15,
        image: ProductImage,
      }
    );
  }

  function increaseAmount() {
    if (product.stock > product.amount)
      setProduct(
        produce(product, (draft) => {
          draft.amount += 1;
        })
      );
  }

  function decreaseAmount() {
    if (product.amount > 1)
      setProduct(
        produce(product, (draft) => {
          draft.amount -= 1;
        })
      );
  }

  function deleteProductFromCart() {
    setProduct(null);
  }

  function addProductToCart() {
    dispatch(addProduct(product));
    setProduct(null);
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.closeButton}
            activeOpacity={0.8}
            onPress={navigation.goBack}
          >
            <CloseIcon width={15} height={15} />
          </TouchableOpacity>

          <Text style={styles.title}>escaneamento do código</Text>
        </View>

        <View style={styles.searchBar}>
          <SearchIcon style={styles.searchIcon} width={20} height={20} />

          <TextInput
            style={styles.searchInput}
            placeholder="Inserir código de barras manualmente"
            underlineColorAndroid="transparent"
          />

          <Button
            style={styles.searchButton}
            title="ok"
            color={colors.primaryColor}
          />
        </View>
      </View>
      <View style={styles.scannerContainer}>
        {hasPermission ? (
          <>
            <BarCodeScanner
              style={styles.scanner}
              onBarCodeScanned={product ? undefined : handleScan}
              barCodeTypes={[BarCodeType.upc_a]}
            />
            <ScanFrame style={styles.scannerOverlay} />
          </>
        ) : hasPermission === null ? (
          <Spinner />
        ) : (
          <>
            <Text style={styles.noPermissionText}>
              Para utilização deste recurso, habilite o uso da câmera.
            </Text>
            <Button
              title="Habilitar"
              color={colors.primaryColor}
              onPress={requestPermission}
            />
          </>
        )}
      </View>

      {product && (
        <View style={styles.addProduct}>
          <View style={styles.productWrapper}>
            <Product
              data={product}
              onAdd={increaseAmount}
              onRemove={decreaseAmount}
              onDelete={deleteProductFromCart}
              deleteIcon="close"
            />
          </View>

          <TouchableOpacity
            style={styles.addProductButton}
            activeOpacity={0.8}
            onPress={addProductToCart}
          >
            <Text style={styles.addProductButtonText}>adicionar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
