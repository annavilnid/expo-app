import {StyleSheet, TouchableOpacity, Text, Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    label?: string,
    iconName?: string,
    onPress: () => void,
    iconSizePercent?: number;
}
export const Button: React.FC<Props> = ({label, iconName, iconSizePercent, onPress}) => {
    const windowWidth = Dimensions.get('window').width; // Получаем ширину экрана

   const iconSize = iconSizePercent ? (windowWidth * iconSizePercent) / 100 : 0; // Рассчитываем размер иконки в пикселях
    return (
            <TouchableOpacity
                style={styles.customBtnBG}
                onPress={onPress}>
                {label && <Text style={styles.customBtnText}>{label}</Text>}
                {iconName && <Icon size={iconSize} name={iconName} color="#ff0000" />}
            </TouchableOpacity>
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
    },
    icon: {
        // flex: 1,
        // alignSelf: 'stretch',
    },
});