import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TaskType} from "App";
import {CheckBox} from "react-native-elements";
import {EditableSpan} from "@src/components/common/EditableSpan";
import {Button} from "@src/components/common/Button";

type Props = {
    todolistId: string,
    tasks: {[key: string]: TaskType[]},
    task: TaskType,
    onChangeTasks: (tasks: {[key: string]: TaskType[]}) => void
    onPressDeleteTask: (taskId: string) => void
}

export const Task: React.FC<Props> = ({todolistId, tasks, task, onPressDeleteTask, onChangeTasks}) => {
    const {id, title, isDone} = task
    const onPressChangeStatus = () => onChangeTasks({...tasks, [todolistId]: tasks[todolistId].map(t=> t.id === id ? {...t, isDone: !isDone}: t)})

    return (
        <View style={styles.container}>
            <CheckBox
                checked={isDone}
                onPress={onPressChangeStatus}
                containerStyle={styles.checkboxContainer}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
            />
            <EditableSpan todolistId={todolistId} id={id} tasks={tasks} title={title} onChangeTasks={onChangeTasks}/>
            <Button  iconName={'delete'} iconSizePercent={10} onPress={()=>onPressDeleteTask(id)}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxContainer: {
        color: "yellow",
        width: "10%",
        borderWidth: 0,
    },
    text: {
        fontSize: 16,
    },
});
