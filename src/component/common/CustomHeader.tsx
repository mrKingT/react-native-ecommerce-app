import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';

export default function CustomHeader({ title = 'header', navigation }) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image 
                    style={[styles.headerEelement, styles.backIcon]} 
                    source={require('../../assets/icons/icon-back.png')} 
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity>
                <Image 
                    style={[styles.headerEelement, styles.searchIcon]} 
                    source={require('../../assets/icons/icon-search.png')} 
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50, // Giảm chiều cao của header
        backgroundColor: Colors.primaryBackgroundColor,
        paddingVertical: 5, // Thêm padding trên và dưới
    },
    headerEelement: {
        height: 28, // Giảm chiều cao icon
        width: 28, // Giảm chiều rộng icon
    },
    searchIcon: {
        marginRight: 15, // Giảm khoảng cách bên phải
    },
    backIcon: {
        marginLeft: 15, // Giảm khoảng cách bên trái
    },
    headerText: {
        fontSize: 16, // Giảm kích thước font
        fontWeight: 'bold',
    },
});
