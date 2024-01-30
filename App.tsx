import React from 'react';
//import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Keyboard, TouchableWithoutFeedback, SafeAreaView, Text} from 'react-native';
import {Task} from "@src/components/Task";
import {AddItemForm} from "@src/components/common/AddItemForm";
import {Button} from "@src/components/common/Button";

export type TaskType = {
  id: string,
  title: string,
  isDone: boolean,
}

export default function App() {
  type TodolistType = {
    id: string,
    title: string,
    filter: string,
  }

  const stateTodolists = [
    {id: "1", title: "todo1", filter: "all"},
    {id: "2", title: "todo2", filter: "all"}
  ]

  const stateTasks = {
    "1": [{id: "t11", title: "CSS", isDone: true}, {id: "t12", title: "JS", isDone: true}],
    "2": [{id: "t21", title: "HTML", isDone: false}, {id: "t22", title: "React", isDone: false}],
  }
  const [todolists, onChangeTodolists] = React.useState<TodolistType[]>(stateTodolists);
  const [tasks, onChangeTasks] = React.useState<{[key: string]: TaskType[]}>(stateTasks);

  const onPressAddTodolist = (value: string) => {
    const todolistId = new Date().toString()
    onChangeTodolists([{id: todolistId, title: value, filter: 'all'}, ...todolists])
    onChangeTasks({...tasks, [todolistId]: []})
  }

  const onPressAddTask = (todolistId: string, value: string) => {
    const taskId = new Date().toString()
    onChangeTasks({...tasks, [todolistId]: [{id: taskId, title: value, isDone: false},...tasks[todolistId]]})
  }

  const onPressDeleteTask = (todolistId, taskId) => {
    onChangeTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})
  }

  const onPressDeleteTodolist = (todolistId) => {
    onChangeTodolists(todolists.filter(t => t.id !== todolistId))
  }

  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={[globalStyles.border, styles.appContainer]}>
          <View style={[globalStyles.border, styles.appContainer]}>
               <p>test</p>

              <SafeAreaView>
              <View style={styles.todolistForm}>
                <AddItemForm placeholder={"create todolist"} buttonHandler={onPressAddTodolist}/>
              </View>
              <View style={globalStyles.todolistList}>
                {todolists.map(todolist => (
                    <View key={todolist.id}>
                      <Button  iconName={'delete'} iconSizePercent={10} onPress={()=>onPressDeleteTodolist(todolist.id)}/>
                      <Text>{todolist.title}</Text>
                      <AddItemForm placeholder={"add task"} buttonHandler={(value)=>onPressAddTask(todolist.id, value)}/>
                      {tasks[todolist.id]?.map(task => (
                          //TODO
                          //убрать потом таски
                          <Task key={task.id} todolistId={todolist.id} tasks={tasks} task={task} onChangeTasks={onChangeTasks} onPressDeleteTask={(taskId)=>onPressDeleteTask(todolist.id, taskId)}/>
                      ))}
                    </View>
                ))}
              </View>
              </SafeAreaView>
            </View>
          {/*</SafeAreaView>*/}
        </TouchableWithoutFeedback>
  );
}

// const HideKeyboard = ({children} : {children: ReactNode}) => (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       {children}
//     </TouchableWithoutFeedback>
// )

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
  todolistList: {
    flexDirection: "column",
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
