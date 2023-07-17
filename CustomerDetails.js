import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View,Button, } from 'react-native';

export default function App() {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [mail,setMail] = useState("");
  const [address,setAddress] = useState("");
  const [address2,setAddress2] = useState("");
  const [landmark,setLandmark] = useState("");
  const [City,setCity] = useState("");
  const [pincode,setPincode] = useState("");
  return (
    <View style={styles.container}>
  
      <Text 
              style={{fontSize:30}}>Create Account</Text>
               <TextInput  
                   style={styles.input} 
                    placeholder="Name"  
                    onChangeText={(name) => setName(name)}  
                />
                  <TextInput  
                    style={styles.input}   
                    placeholder="Mail"
                    onChangeText={(mail) => setMail(mail)}

                /> 
                <TextInput  
                    style={styles.input}  
                    placeholder="Address line 1"  
                    onChangeText={(address) => setAddress(address)}  
                /> 
                <TextInput  
                    style={styles.input}  
                    placeholder="Address line 2"  
                    onChangeText={(address2) => setAddress2(address2)}  
                /> 
                <TextInput  
                    style={styles.input}  
                    placeholder="Landmark"  
                    onChangeText={(landmark) => setLandmark(landmark)}  
                />
                <TextInput  
                    style={styles.input}  
                    placeholder="City"  
                    onChangeText={(city) => setCity(city)}  
                />
                <TextInput  
                    style={styles.input}
                    keyboardType = 'numeric'  
                    placeholder="Pincode"  
                    onChangeText={(pincode) => setPincode(pincode)}  
                />
                 <TextInput  
                    style={styles.input}  
                    placeholder="Set Password"  
                    onChangeText={(password) => setPassword(password)}  
                /> 
                <TextInput  
                    style={styles.input}  
                    placeholder="Re-Enter Password"   
                /> 

                <Button title='submit'></Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
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

