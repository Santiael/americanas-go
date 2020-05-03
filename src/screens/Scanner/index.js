import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import colors from '../../constants/colors';

import ScanFrame from '../../assets/images/scan-frame.svg';
import CloseIcon from '../../assets/icons/close.svg';
import BasketIcon from '../../assets/icons/shopping-basket.svg';
import SearchIcon from '../../assets/icons/search.svg';

import styles from './styles';

export default function Scanner() {
  const [, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.scannerContainer}>
        <BarCodeScanner style={styles.scanner} />
        <ScanFrame style={styles.scannerOverlay} />
      </View>
      <View style={styles.header}>
        <View style={styles.navBar}>
          <CloseIcon width={15} height={15} />
          <Text style={styles.title}>escaneamento do código</Text>
          <BasketIcon width={25} height={25} />
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
      <View style={styles.footer} />
    </View>
  );
}
