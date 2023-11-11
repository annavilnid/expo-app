import {StyleSheet, TextInput, View} from "react-native";
import {Button} from "@src/components/common/Button";
import React from "react";

type Props = {
    placeholder: string,
    buttonHandler: (title: string) => void,
}
export const AddItemForm: React.FC<Props> = ({buttonHandler, placeholder}) => {
    const [value, onChangeValue] = React.useState<string>('');


    const onPress = () => {
        buttonHandler(value)
        onChangeValue('')
    }

    const onChangeInputValue = (value: string) => {
        onChangeValue(value)
    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeInputValue}
                placeholder={placeholder}/>
            <Button iconName="plus-circle" iconSizePercent={8} onPress={onPress}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        flexDirection: "row",
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#0905f5'
    },
    input: {
        backgroundColor: '#fff',
        minWidth: '70%',
        height: 40,
        borderWidth: 1,
        paddingHorizontal: "3%",
        marginRight: "3%",
    },

});