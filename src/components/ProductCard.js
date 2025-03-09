import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './ProductCard.style';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: product.imgUrl
          }}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.price}>Rp. {product.price}</Text>
        <Text style={styles.rate}>Rating : {product.rate}</Text>
        <Text>Terjual : {product.terjual}</Text>
        <View style={styles.discountSec}>
          <Text style={styles.discountText}>Hemat Rp. {product.getDiscountedPrice()}</Text>
          <Text style={styles.discountText}>Discount {product.getDiscountPercentage()}%</Text>
        </View>
      </View>
    </View>
  );
}
