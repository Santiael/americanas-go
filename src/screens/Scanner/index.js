import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import colors from '../../constants/colors';
import Spinner from '../../components/Spinner';

import ScanFrame from '../../assets/images/scan-frame.svg';
import CloseIcon from '../../assets/icons/close.svg';
import SearchIcon from '../../assets/icons/search.svg';

import styles from './styles';

export default function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  async function requestPermission() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
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
            <BarCodeScanner style={styles.scanner} />
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

      <View style={styles.footer} />
    </View>
  );
}
