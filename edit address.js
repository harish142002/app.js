import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, TextInput, View, Button, ScrollView, Card, Image,Alert } from 'react-native';


export default function App() {
  const [address,setAddress] = useState("");
  const [address2,setAddress2] = useState("");
  const [landmark,setLandmark] = useState("");
  const [City,setCity] = useState("");
  const [pincode,setPincode] = useState("");

  return (
    <View style={styles.container}>
       <Text 
              style={{fontSize:25,fontWeight: 'bold',}}>EDIT ADDRESS</Text>
    <View style={styles.container2}>
   <View  style={styles.sec}><TextInput  
                    style={styles.input}  
                    placeholder="Address line 1"  
                    onChangeText={(address) => setAddress(address)}  
                /></View> 
                <View  style={styles.sec}><TextInput  
                    style={styles.input}  
                    placeholder="Address line 2"  
                    onChangeText={(address2) => setAddress2(address2)}  
                /></View> 
                <View  style={styles.sec}><TextInput  
                    style={styles.input}  
                    placeholder="Landmark"  
                    onChangeText={(landmark) => setLandmark(landmark)}  
                /></View> 
                <View  style={styles.sec}><TextInput  
                    style={styles.input}  
                    placeholder="City"  
                    onChangeText={(city) => setCity(city)}  
                /></View>
                <View  style={styles.sec}><TextInput  
                    style={styles.input}
                    keyboardType = 'numeric'  
                    placeholder="Pincode"  
                    onChangeText={(pincode) => setPincode(pincode)}  
                /></View>
                 <View style={styles.sec2}><Button title='submit'></Button>
                 </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    marginTop:'9%',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:'2%',
    marginHorizontal:'5%',
    alignItems:'center',
  },
  sec: {
   marginTop:'3%',
   backgroundColor:'cyan',
   width:'50%',
   height:'4%',
  },
  sec2: {
    marginTop:'3%',
   }
});



