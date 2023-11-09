import React, {Component, ReactNode} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
    label?: string,
    iconName?: string,
    onPress: () => void,

}
export const Button: React.FC<Props> = ({label, iconName, onPress}) => {
    return (
        // <View style={styles.container}>
            <TouchableOpacity
                style={styles.customBtnBG}
                onPress={onPress}>
                {label && <Text style={styles.customBtnText}>{label}</Text>}
                {iconName && <Icon name={iconName} size={30} color="#ff0000" />}
            </TouchableOpacity>
        //
        // </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    /* Here, style the text of your button */
    customBtnText: {
        fontSize: 10,
        fontWeight: '400',
        color: "#fff",
        backgroundColor: "#000",
    },

    /* Here, style the background of your button */
    customBtnBG: {
        backgroundColor: "#007aff",
        // paddingHorizontal: 1,
        // paddingVertical: 1,
        borderRadius: 50,
    }
});