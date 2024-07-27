import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../component/common/CustomHeader'
import CatagoriesBar from '../component/common/CatagoriesBar'
import FilterBar from '../component/common/FilterBar'
import ProductListItem from '../component/shop/ProductListItem'

export default function ShopScreen({navigation}) {
  return (
    <SafeAreaView>
      <CustomHeader title="Women's Top" navigation={navigation}/>
      <CatagoriesBar/>
      <FilterBar/>
      <ProductListItem/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})