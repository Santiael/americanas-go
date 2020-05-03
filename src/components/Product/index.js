import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../constants/colors';

import styles from './styles';

export default function Product({ data, onDelete, onAdd, onRemove }) {
  const { name, image, price, amount } = data;

  return (
    <View style={styles.productContainer}>
      <Image style={styles.productImage} source={image} />

      <View style={styles.productInfo}>
        <Text
          style={styles.productTitle}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {name}
        </Text>

        <Text style={styles.productPrice}>{`R$${price}`}</Text>

        <View style={styles.amountContainer}>
          <TouchableOpacity activeOpacity={0.6} onPress={onRemove}>
            <MaterialIcons
              name="remove-circle"
              size={28}
              color={colors.primaryColor}
            />
          </TouchableOpacity>

          <View style={styles.amountUnit}>
            <Text style={styles.unitText}>{`${amount} un.`}</Text>
          </View>

          <TouchableOpacity activeOpacity={0.6} onPress={onAdd}>
            <MaterialIcons
              name="add-circle"
              size={28}
              color={colors.primaryColor}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.6} onPress={onDelete}>
        <MaterialIcons name="delete" size={25} color={colors.darkGray} />
      </TouchableOpacity>
    </View>
  );
}
