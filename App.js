import React, { useEffect, useState } from "react"; // Added useState
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import database from '@react-native-firebase/database';

const App = () => {
  const [name, setName] = useState("Dev Zaveri"); // Fixed state initialization

  const [text , setText] = useState('')
  // const []

  useEffect(() => {
    const reference = database().ref('/user');
    reference.once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val().name);
        setName(snapshot.val().name); // Update the state with the value from the database
      });

    // database()
    //   .ref('/user')
    //   .set({
    //     name: 'Ada Lovelace',
    //     age: 31,
    //   })
    //   .then(() => console.log('Data set.'));
  }, []); // Added an empty dependency array to run this effect only once

dataAddOn =()=>{
  // database()
  //     .ref('/user')
  //     .set({
  //       name: text,
  //     })
  //     .then(() => console.log('Data set.'));
  const newReference = database().ref('/user').push();

console.log('Auto generated key: ', newReference.key);

newReference
  .set({
    name: text
  })
  .then(() => console.log('Data updated.'));
}

  return (
    <View>
      <TextInput
      onChangeText={(text)=>{
        setText(text)
      }}
      style={{
        height:50,
        width:"80%",
        borderWidth:1
      }}></TextInput>
      <TouchableOpacity 
      onPress={dataAddOn}
      style={{
        height:50,
        width:80,
        backgroundColor: 'red'
      }}></TouchableOpacity>
      <Text>{name}</Text>
    </View>
  )
}

export default App;
