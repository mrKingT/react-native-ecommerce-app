import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';
import ReviewBar from '../common/ReviewBar';

export default function NewListItem({
    iconText,
    iconbackground,
    price = 10,
    category = 'Mango Boy',
    review = 4,
    reviewCount = 10,
    name = 'T-Shirt Sailing',
    imageUrl = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    boxstyle = 150,
}) {
    return (
        <View style={[styles.itemContainer, { width: boxstyle }]}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    imageStyle={styles.imageStyle}  // Đổi tên từ imageBacground thành imageStyle
                    resizeMode='contain'
                    source={{ uri: imageUrl }}
                >
                    <View style={styles.newSaleContainer}>
                        <Text style={[styles.newIcon, { backgroundColor: iconbackground || Colors.primaryColor }]}>
                            {iconText}
                        </Text>
                        <View style={styles.heartView}>
                            <Image
                                style={styles.heartImage}
                                source={require('../../assets/icons/product-card-heart.png')}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.descriptionContainer}>
                <ReviewBar count={reviewCount} review={review} />
                <Text style={styles.categoryText}>{category}</Text>
                <Text numberOfLines={2} style={styles.nameText}>{name}</Text>
                <Text style={styles.priceText}>{price}$</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 5,
    },
    imageStyle: {  // Đã sửa tên từ imageBacground thành imageStyle
        borderRadius: 8,
    },
    newIcon: {
        color: Colors.whiteColor,
        margin: 5,
        borderRadius: 10,
        textAlign: 'center',
        width: 40,
        fontSize: 12,
    },
    newSaleContainer: {
        height: 184,
        width: 148,
    },
    heartView: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
        height: 40,
        width: 40,
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: -20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
    },
    heartImage: {
        height: 35,
        width: 35,
    },
    descriptionContainer: {
        padding: 5,
    },
    categoryText: {
        color: Colors.textGray,
        fontSize: 14,
    },
    nameText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    priceText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    imageContainer: {
        backgroundColor: Colors.whiteColor,
    },
});
