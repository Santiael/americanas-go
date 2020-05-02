import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import RemoveIcon from '../../assets/icons/remove-icon.svg';
import AddIcon from '../../assets/icons/btn-add.svg';
import MinusIcon from '../../assets/icons/btn-remove.svg';

import styles from './styles';

export default function Product({ data, onDelete, onAdd, onRemove }) {
  const { name, image, price, amount } = data;

  return (
    <View style={styles.basketItem}>
      <View style={styles.wrapItem}>
        <Image style={styles.imageItem} source={image} />
      </View>
      <View>
        <View style={styles.wrap}>
          <Text style={styles.titleItem} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <View style={styles.circleIcon}>
            <TouchableOpacity onPress={onDelete}>
              <RemoveIcon style={styles.removeIcon} width={15} height={10} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.priceItem}>
          R$
          {price}
          /cada
        </Text>
        <View style={styles.amountItem}>
          <TouchableOpacity onPress={onAdd}>
            <AddIcon style={styles.removeIcon} width={15} height={12} />
          </TouchableOpacity>
          <Text style={styles.unitItem}>
            {amount}
            un.
          </Text>
          <TouchableOpacity onPress={onRemove}>
            <MinusIcon style={styles.removeIcon} width={15} height={10} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
