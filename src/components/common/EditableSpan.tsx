import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {TaskType} from "App";

type Props = {
  todolistId: string
  id: string
  title: string
  tasks: {[key: string]: TaskType[]}
  onChangeTasks: (tasks: {[key: string]: TaskType[]},)=>void
}


export const EditableSpan: React.FC<Props> = ({ todolistId, tasks, title, onChangeTasks, id }) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(title);

  const handlePress = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
    onChangeTasks({...tasks, [todolistId]: tasks[todolistId].map(t=> t.id === id ? {...t, title: editedText}: t)})
  };


  return (
    <View style={styles.container}>
      <div></div>
      {editing ? (
        <TextInput
          style={styles.input}
          value={editedText}
          onChangeText={setEditedText}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 16,
    borderBottomWidth: 1,
    padding: 5,
  },
  input: {
    color: 'red',
    fontSize: 16,
    borderBottomWidth: 1,
    padding: 5,
  },
});
