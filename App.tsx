import React, {ReactNode} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, TextInput, View, Text, Keyboard, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import {Button} from "./components/Button";

export default function App() {
  type Todolist = {
    id: string,
    title: string,
    filter: string,
  }

  type Task = {
    id: string,
    title: string,
    isDone: boolean,
  }

  const stateTodolists = [
    {id: "1", title: "todo1", filter: "all"},
    {id: "2", title: "todo2", filter: "all"}
  ]

  const stateTasks = {
    "1": [{id: "t1", title: "CSS", isDone: true}, {id: "t1", title: "JS", isDone: true}],
    "2": [{id: "t1", title: "CSS", isDone: false}, {id: "t1", title: "JS", isDone: false}],
  }
  const [todolists, onChangeTodolists] = React.useState<Todolist[]>(stateTodolists);
  const [tasks, onChangeTasks] = React.useState<{[key: string]: Task[]}>(stateTasks);
  const [value, onChangeValue] = React.useState<string>('');
  const onPressAddTodolist = () => {
    onChangeTodolists([{id: 'new', title: value, filter: 'all'}, ...todolists])
    onChangeValue('')
  }

  const onChangeInputValue = (value: string) => {
    onChangeValue(value)
  }


  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={[globalStyles.border, styles.appContainer]}>
            <View style={[globalStyles.border, styles.appContainer]}>
              <SafeAreaView>
              <View style={styles.todolistForm}>
                <TextInput
                    style={[globalStyles.todolistForm, styles.todolistFormInput]}
                    value={value}
                    onChangeText={onChangeInputValue}
                    placeholder="create todolist"/>
                <Button iconName="add-circle-outline" onPress={onPressAddTodolist}/>
                {/*<Button style={{ba}} title="+" onPress={onPressAddTodolist}/>*/}
              </View>
              {/*<View style={globalStyles.TodolistForm}>*/}
              {/*  {todolists.map(todolist => (*/}
              {/*      <View key={todolist.id}>*/}
              {/*        <Text>{todolist.title}</Text>*/}
              {/*        /!*{tasks[todolist.id].map(task => (*!/*/}
              {/*        /!*    <View key={task.id}>*!/*/}
              {/*        /!*      <Text>{task.title}</Text>*!/*/}
              {/*        /!*    </View>*!/*/}
              {/*        /!*))}*!/*/}
              {/*      </View>*/}
              {/*  ))}*/}
              {/*</View>*/}
              </SafeAreaView>
            </View>
          {/*</SafeAreaView>*/}
        </TouchableWithoutFeedback>
  );
}

const HideKeyboard = ({children} : {children: ReactNode}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  appContainer: {
    // padding: 50,
    flex: 1,
    backgroundColor: '#004643',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todolistForm: {
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  todolistFormButton: {
   backgroundColor: '#0905f5'
  },
  todolistFormInput: {
    backgroundColor: '#fff',
    minWidth: '70%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: "3%",
    marginRight: "3%",
  },
});

const globalStyles = StyleSheet.create({
  border: {
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  normalFont: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#333',
  },
  boldFont: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  todolistForm: {
    borderColor: 'blue',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  todolistList: {
    borderColor: '#1df40a',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
