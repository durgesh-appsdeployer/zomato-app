import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MobileVerification({ navigation }) {
  const [confirm, setConfirm] = useState(null);

  const [number, setNumber] = useState(0);

  const checkLoggedIn = async () => {
    const number = await AsyncStorage.getItem("user_number");
    if (number) {
      navigation.navigate("home", { number: number });
    }
  }

  const confirmCode = async (code, confirmed) => {
    try {
      await confirmed.confirm(code);
      await AsyncStorage.setItem("user_number", number);
      navigation.navigate("home", { number: number });
    } catch (error) {

      alert('Invalid code!');
    }
  };

  async function signIn() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(number);
      setConfirm(confirmation);
      navigation.navigate("otp", { number: number, confirmCode: confirmCode, confirm: confirmation });

    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    checkLoggedIn();
  }, [])


  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
          <Image source={require("../assets/mv_screen.jpg")} style={{ marginBottom: 20 }}></Image>
          <Text style={{ fontWeight: "800", color: "black", fontSize: 23 }}>India's #1 Food Delivery</Text>
          <Text style={{ fontWeight: "800", color: "black", fontSize: 23 }}>and Dining App</Text>
          <Text style={{ fontWeight: "500", color: "gray", fontSize: 13, marginTop: 40, marginBottom: 20 }}>Log in or sign up</Text>
          <TextInput
            cursorColor="dodgerblue"
            style={{
              color: 'black',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'lightgray',
              padding: 10,
              height: '6%',
              width: '90%',
              fontSize: 15,
              marginBottom: '5%',
            }}
            value={number}
            onChangeText={n => { setNumber(n) }}
          />
          <TouchableOpacity title="Upload File" style={{ borderWidth: 1, borderColor: "red", height: 50, width: "90%", backgroundColor: "#ff204a", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 0, alignSelf: "center", marginBottom: 10 }}
            onPress={() => signIn()}>
            <Text style={{ color: "white", fontSize: 15, color: "white", fontWeight: "600" }}>Login</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: "500", color: "gray", fontSize: 13, marginTop: 10, marginBottom: 20 }}>or</Text>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 30 }}>
            <Image source={require("../assets/google.png")} style={{ width: 40, height: 40 }}></Image>
            <Image source={require("../assets/3dots.png")} style={{ width: 40, height: 40 }}></Image>
          </View>
          <Text style={{ fontWeight: "500", color: "gray", fontSize: 13, marginTop: 30 }}>By continuing, you agree to our</Text>
          <Text style={{ fontWeight: "500", color: "gray", fontSize: 13 }}>Terms of Service  Privacy Policy  Content Policy</Text>
        </View>
      </SafeAreaView>
    </>
  )
}