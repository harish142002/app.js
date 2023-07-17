import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, Card, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Profile() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      marginTop: insets.top,
      marginBottom: insets.bottom,
      marginLeft: insets.left,
      marginRight: insets.right,
    }}>
      <AntDesign name="shoppingcart" size={24} color="black"><Text  style={{ fontSize: 25, fontWeight: 'bold', }} >Your Cart</Text></AntDesign>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.main1}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', }} >plumber</Text>
            <Text>1 service . ₹500</Text>
          </View>
          <View style={styles.main2}>
          <Image source = {require("./assets/plumbing.png")} style = {{ width: '50%', height:200 }} ></Image>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
  },
  main:{
    paddingTop:'5%',
    flex:1,
    flexDirection:'row',
  }
});