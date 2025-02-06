import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

type Props = {
    title: string;
    isDone: boolean;
};

export default function ToDoItem({ title, isDone }: Props) {
    const [isChecked, setChecked] = useState(isDone);

    return (
        <View style={style.toDoItem}>
            <Checkbox style={style.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={style.text}>{title}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    toDoItem: {
        borderColor: '#000000',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    text: {
        margin: 10
    },
    checkbox: {
        marginVertical: 20,
        marginLeft: 5,
        marginRight: 10
    }
});
