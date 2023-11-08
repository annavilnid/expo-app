import React, {ReactNode} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, TextInput, View, Button, Text, Keyboard, TouchableWithoutFeedback, SafeAreaView} from 'react-native';

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
      // <SafeAreaView style={[globalStyles.border, styles.appContainer]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={[globalStyles.border, styles.appContainer]}>
        <SafeAreaView>
          <View style={[globalStyles.border, {flex: 1}]}>
            <View>
              <TextInput
                  style={[globalStyles.border, styles.input]}
                  value={value}
                  onChangeText={onChangeInputValue}
                  placeholder="create todolist"/>
              <Button title="+" onPress={onPressAddTodolist}/>
            </View>
            <View>
              {todolists.map(todolist => (
                  <View key={todolist.id}>
                    <Text>{todolist.title}</Text>
                    {/*{tasks[todolist.id].map(task => (*/}
                    {/*    <View key={task.id}>*/}
                    {/*      <Text>{task.title}</Text>*/}
                    {/*    </View>*/}
                    {/*))}*/}
                  </View>
              ))}
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      // </SafeAreaView>
  );
}

const HideKeyboard = ({children} : {children: ReactNode}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#004643',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    minWidth: '70%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const globalStyles = StyleSheet.create({
  border: {
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
