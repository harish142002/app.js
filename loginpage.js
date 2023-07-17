import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,Text, TextInput, View, Button, ScrollView, Card, Image,Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
       <Text
        style={{ fontSize: 30, fontWeight: 'bold' }}>LOGIN</Text>
         <TextInput  
                    style={styles.input}
                    keyboardType = 'numeric'  
                    placeholder=" Enter Phone Number"    
                />
           <TextInput  
                    style={styles.input}
                    placeholder=" Enter Password"    
                />
               <View style={{ paddingLeft: 4, width:'30%',}}>
    <Button title="Log In" style={styles.button}  />
  </View>
              <Text style={{ padding:20,}}>Forgot Password ?</Text>
              <Button title='Create New account'color={'black'} ></Button>

          

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    height: 35,
    margin: 10,
    borderWidth:1,
    padding: 10,
    width:220,
    borderRadius:7,
  },
});



