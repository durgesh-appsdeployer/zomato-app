import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Second() {
    return (
        <View style={{ flex: 1, backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
            <View style={{ marginTop: "20%", marginLeft: 50 }}>
                <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40 }}>3,00,000+</Text>
                <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40, lineHeight: 40 }}>restaurants</Text>
                <Text style={{ fontWeight: "500", color: "black", fontSize: 40, marginBottom: 15, lineHeight: 40 }}>at your doorstep</Text>
                <Text style={{ fontWeight: "500", color: "gray", fontSize: 17, marginBottom: 10 }}>+24x7 DELIVERY</Text>
            </View>
            <View style={{ width: "200%", height: 800, borderRadius: 400, backgroundColor: "#ff204a", position: "absolute", left: "-50%", bottom: "-50%" }}></View>
            <Image source={require("../assets/phone.png")} style={{ width: 370, height: 800, position: 'absolute', bottom: "-25%", left: "5%", zIndex: 1 }}></Image>
            <View style={{ display: "flex", flexDirection: "column", position: "absolute", left: "17%", bottom: "0%", zIndex: 99 }}>
                <View style={{marginLeft: 20, marginBottom: 30}}>
                    <Text style={{ fontWeight: "800", color: "black", fontSize: 25 }}>top brands</Text>
                    <Text style={{ fontWeight: "500", color: "black", fontSize: 18 }}>for superfast delivery</Text>
                </View>
                <View style={{ display: "flex", flexWrap: "wrap", gap: 30, height: 350, width: "80%" }}>
                    <Image source={require("../assets/d.png")} style={{ width: 70, height: 70 }}></Image>
                    <Image source={require("../assets/m.png")} style={{ width: 70, height: 70 }}></Image>
                    <Image source={require("../assets/kfc.png")} style={{ width: 70, height: 70 }}></Image>
                    <Image source={require("../assets/ph.png")} style={{ width: 70, height: 70 }}></Image>
                    <Image source={require("../assets/bk.png")} style={{ width: 70, height: 70 }}></Image>
                    <Image source={require("../assets/s.png")} style={{ width: 70, height: 70 }}></Image>
                    <Image source={require("../assets/k.png")} style={{ width: 70, height: 55 }}></Image>
                    <Image source={require("../assets/b.png")} style={{ width: 70, height: 70 }}></Image>
                    <Image source={require("../assets/c.png")} style={{ width: 70, height: 70 }}></Image>
                </View>
            </View>
        </View>
    )
}