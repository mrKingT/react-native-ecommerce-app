import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';

export default function CategoriesBar({ onCategoryPress }) {
  return (
    <View style={styles.barContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.barItem} onPress={() => onCategoryPress('Áo thun')}>
          <Text style={styles.barItemText}>Nam</Text> {/* Thay "Nam" bằng "Áo thun" */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.barItem} onPress={() => onCategoryPress('Quần')}>
          <Text style={styles.barItemText}>Nữ</Text> {/* Thay "Nữ" bằng "Quần" */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.barItem} onPress={() => onCategoryPress('Phụ kiện')}>
          <Text style={styles.barItemText}>Phụ kiện</Text> {/* Thay "Nữ" bằng "Quần" */}
        </TouchableOpacity>
        {/* Thêm các danh mục khác nếu cần */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: Colors.whiteColor,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  barItem: {
    backgroundColor: Colors.blackColor,
    marginHorizontal: 6,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barItemText: {
    color: Colors.whiteColor,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
