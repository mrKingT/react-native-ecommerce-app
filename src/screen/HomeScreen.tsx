import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import HeroSection from '../component/home/HeroSection'
import NewSection from '../component/home/NewSection'
import SaleSection from '../component/home/SaleSection'

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
        <ScrollView>
        <HeroSection navigation={navigation} />
        <NewSection/>
        <SaleSection/>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})