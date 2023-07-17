import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, Card, Image,Alert } from 'react-native';
export default function App() {
  return (
    
    <View style={styles.container}>
     <ScrollView>
      <View style={styles.outterbox}>
        <View style={{width: '50%'}}>
          <Text
            style={{ fontSize: 25, fontWeight: 'bold' }}>Product Title</Text>
          <Text
            style={{ fontSize: 20, }}>₹Price</Text>
          <Text
            style={styles.Text1}>₹Price</Text>
          <Text
            style={{ width: '95%', fontSize: 14, }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</Text>
        </View>
        <View style={{width: '50%'}}>
          < Image source={require("./assets/Acservice.jpg")} style={{ width: '100%', height: 200 }}></Image>
        </View>
        <View style={styles.create}>
        <Button 
        title="Add to Cart"
        onPress={() => Alert.alert('Added to cart')}
      ></Button>
      </View>
      <View style={styles.create1}>
        <Button style={{color: 'red', marginTop: 10, padding: 10}}
        title="Book Now"
      ></Button>
      </View>
      </View>
      <Text style={{ fontSize: 25, fontWeight: 'bold',paddingLeft:10,}}>Related Service</Text>
        <View style={styles.box}>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
        </View>
        
      </ScrollView>
    </View>
  );
}


const ServiceCard = () => {
  return (<View style={{ width:'33%', height: 130}} ><Image source = {require("./assets/acmechanic.jpg")} style = {{ width: '90%', height: 90 }} ></Image><Text>Service Card</Text></View>)
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
  },

  input: {
    height: 35,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: 350,
    borderRadius: 7,
  },

  box: {
    padding: 13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:10,
  },
  outterbox: {
    paddingTop:10,
    padding:19,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // height:50
  },
  Text1: {
    textDecorationLine:'line-through',
    fontSize:15,
  },
  create:{
    padding:20,
    paddingLeft:125,
  },
  create1:{
    paddingLeft:130,
  },
});

