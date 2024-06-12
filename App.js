import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [text, setText] = useState();

  const handleAddTask = () => {
    console.log(task);
  }

  return (
    <View style={styles.container}>
     {/* Today's Tasks */}
     <View style={styles.taskWrapper}>
       <Text style={styles.sectionTitle}>Today's Tasks</Text>

       <View style={styles.items}>
        {/* This is where the tasks will go */}
        <Task text ={'Task 1'} />
        <Task text ={'Task 2'} />
       </View>

     </View>




     {/* Write a Tasks */}
     <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}
      >
        <TextInput style ={styles.input} placeholder={'Write a Task'}/>

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>
        </TouchableOpacity>

     </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  items: {
    marginTop: 30,
  },


  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 100,
    width: 60,
    backgroundColor: '#FFF',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0'
  },
  addText: {

  },

});
