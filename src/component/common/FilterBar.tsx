import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';

export default function FilterBar({ onSortByPrice }) {
  return (
    <View style={styles.barContainer}>
      <TouchableOpacity>
        <View style={styles.barItemContainer}>
          <Image style={styles.filterImage} source={require('../../assets/icons/icon-filter.png')} />
          <Text style={styles.iconText}>Lọc</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSortByPrice}>
        <View style={styles.barItemContainer}>
          <Image style={styles.filterImage} source={require('../../assets/icons/icon-short.png')} />
          <Text style={styles.iconText}>Giá: thấp đến cao</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.barItemContainer}>
          <Image style={styles.filterImage} source={require('../../assets/icons/icon-filter.png')} />
          <Text style={styles.iconText}>Thêm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primaryBackgroundColor,
    marginHorizontal: 10,
    height: 40,
  },
  barItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterImage: {
    height: 25,
    width: 25,
  },
  iconText: {
    fontWeight: '500',
  },
});
