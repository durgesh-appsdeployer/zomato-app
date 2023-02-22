import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Third() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
      <View style={{ marginTop: "20%", marginLeft: 50, position: "absolute", bottom: "10%", right: "10%" }}>
        <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40, textAlign: "right" }}>endless range</Text>
        <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40, lineHeight: 40, marginBottom: 15, textAlign: "right" }}>of cuisines</Text>
        <Text style={{ fontWeight: "500", color: "gray", fontSize: 17, textAlign: "right" }}>DELIVERED IN MINUTES</Text>
      </View>
      <View style={{ width: "200%", height: 800, borderRadius: 400, backgroundColor: "#ff204a", position: "absolute", left: "-50%", top: "-40%" }}></View>
      <Image source={require("../assets/phone.png")} style={{ width: 370, height: 800, position: 'absolute', top: "-25%", left: "5%", zIndex: 1 }}></Image>
      <View style={{ display: "flex", flexDirection: "column", position: "absolute", left: "16%", top: "0%", zIndex: 99, height: 500, width: "68%", borderBottomStartRadius: 40, borderBottomEndRadius: 40, overflow: "hidden" }}>
        <Image source={require("../assets/d1.jpg")} style={{ width: "100%", height: "25%" }}></Image>
        <Image source={require("../assets/d2.jpg")} style={{ width: "100%", height: "25%" }}></Image>
        <Image source={require("../assets/d3.jpeg")} style={{ width: "100%", height: "25%" }}></Image>
        <Image source={require("../assets/d4.jpg")} style={{ width: "100%", height: "25%" }}></Image>
      </View>
    </View>
  )
}