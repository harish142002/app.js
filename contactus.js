import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { Touchable } from 'react-native';
import {StyleSheet, Text, TextInput, View, Button, ScrollView, Card, Image,Alert,borderRadius } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
       <Text style={{fontSize:25,fontWeight: 'bold',}}>Contact Us </Text>
         <View style={styles.cont}>
        <TextInput  
                   style={styles.input} 
                    placeholder="Name"       
                />
        <TextInput  
                   style={styles.input2} 
                    placeholder="mail"  
                />
       <TextInput  
                   style={styles.input1} 
                    placeholder="message"  
                />
         <View style={styles.App}><Button title='submit'></Button></View>
         </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    marginTop:'9%',
    alignItems:'center',
  },
  cont:{
    width:'99%',
    height:'100%',
    alignItems:'center',
  },
  input:{
    height: '5%',
    marginTop: '2%',
    borderWidth:1,
    width:'80%',
    borderRadius:7,
    marginLeft: '2%',
  },
  input1:{
    height: '25%',
    marginLeft: '2%',
    borderWidth:1,
    width:'80%',
    borderRadius:7,
    marginTop: '2%',
  },
  input2:{
    height: '5%',
    marginTop: '2%',
    borderWidth:1,
    width:'80%',
    borderRadius:7,
    marginLeft: '2%',
  },
  App:{
    marginTop:'4%',
    width:'25%'
  }
});



