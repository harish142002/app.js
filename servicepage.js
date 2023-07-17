import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, Card, Image,Alert, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.main}>
          <View style={styles.row}>
           <Text style={{ fontSize: 25, fontWeight: 'bold', }}> Ac services</Text>
           <TouchableOpacity><Text style={{ paddingLeft:'40%'}}>view all>></Text></TouchableOpacity>

          </View>
          <View style={styles.box}>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
           <ServiceCard></ServiceCard>
           <ServiceCard></ServiceCard>
           <ServiceCard></ServiceCard>
           <ServiceCard></ServiceCard>
          </View> 
        </View>
        <View style={styles.main1}>
        <View style={styles.row}>
           <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Plumbing Services</Text>
           <TouchableOpacity><Text style={styles.t1}>view all>></Text></TouchableOpacity>
          </View>
          <View style={styles.box}>
           <ServiceCards></ServiceCards>
           <ServiceCards></ServiceCards>
           <ServiceCards></ServiceCards>
           <ServiceCards></ServiceCards>
           <ServiceCards></ServiceCards>
           <ServiceCards></ServiceCards>
          </View> 
        </View>
        <View style={styles.main2}>
          <View style={styles.row}>
           <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Electrical Services</Text>
           <TouchableOpacity><Text style={{ paddingLeft:'20%'}}>view all>></Text></TouchableOpacity>

          </View>
          <View style={styles.box}>
          <ServiceCard1></ServiceCard1>
          <ServiceCard1></ServiceCard1>
          <ServiceCard1></ServiceCard1>
          <ServiceCard1></ServiceCard1>
          <ServiceCard1></ServiceCard1>
          <ServiceCard1></ServiceCard1>
          </View> 
        </View>
      </ScrollView>
    </View>
  );
}
const ServiceCard = () => {
  return (<View style={{ width:'33%', height: 130}} ><TouchableOpacity><Image source = {require("./assets/Acservice.jpg")} style = {{ width: '90%', height: 90 }} ></Image><Text>Service Card</Text></TouchableOpacity></View>)
}
const ServiceCards = () => {
  return (<View style={{ width:'33%', height: 130}} ><TouchableOpacity><Image source = {require("./assets/plumbingservices.jpg")} style = {{ width: '90%', height: 90 }} ></Image><Text>Service Card</Text></TouchableOpacity></View>)
}
const ServiceCard1 = () => {
  return (<View style={{ width:'33%', height: 130}} ><TouchableOpacity><Image source = {require("./assets/electrical.jpg")} style = {{ width: '90%', height: 90 }} ></Image><Text>Service Card</Text></TouchableOpacity></View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 35,
    marginLeft: 5,
  
  
  },
  box: {
    width:370,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  main: {
    padding: 15,
    height:'32%',
  },
  row: {
    flexDirection:'row'
  },
  t1:{
    paddingLeft:'20%',
  },
  main1:{
    paddingTop:'1%',
    padding: 15,
    height:'32%',
  },
  main2:{
    padding: 15,
    paddingTop:'1%',
  }
});



