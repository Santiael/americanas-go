import * as React from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Fab from '../../components/Fab';

import LogoAmericanas from '../../assets/images/logo-americanas.svg';
import SearchIcon from '../../assets/icons/search.svg';
import BarcodeIcon from '../../assets/icons/barcode.svg';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  function onPressScanner() {
    navigation.navigate('Scanner');
  }

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <LogoAmericanas height={28} width={140} />
          <View style={styles.search}>
            <SearchIcon height={18} width={18} />
            <TextInput
              style={styles.searchInput}
              placeholder="tem tudo, pode procurar :)"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <ScrollView
          style={styles.slider}
          horizontal
          contentContainerStyle={{
            marginTop: 15,
            marginBottom: 25,
            paddingHorizontal: 8,
          }}
          showsHorizontalScrollIndicator={false}
        >
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <View key={`category-${index}`} style={styles.categoryContainer}>
                <View style={styles.categoryCircle} />
                <View style={styles.categoryLabel} />
              </View>
            ))}
        </ScrollView>
        <View style={styles.promoContainer}>
          <View style={styles.smallBox} />
          <View style={styles.bigBox} />
          <View style={styles.bigBox} />
        </View>
      </ScrollView>
      <Fab style={styles.fab} onPress={onPressScanner}>
        <BarcodeIcon width={30} height={24} />
      </Fab>
    </>
  );
}
