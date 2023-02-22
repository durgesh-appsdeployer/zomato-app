import { View, Text, Image } from 'react-native'
import React from 'react'

export default function First() {
    return (
        <View style={{ flex: 1, backgroundColor: "#ff204a", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start" }}>
            <View style={{ marginTop: "20%" }}>
                <Text style={{ fontWeight: "900", color: "white", fontSize: 45, marginBottom: 10, textAlign: "center" }}>India's #1 food delivery app</Text>
                <Text style={{ fontWeight: "800", color: "white", fontSize: 40, marginBottom: 10, textAlign: "center" }}>{`60% \nOFF`}</Text>
                <Text style={{ fontWeight: "400", color: "#ffb2b2", fontSize: 25, textAlign: "center" }}>up to ₹120</Text>
                <Text style={{ fontWeight: "400", color: "white", fontSize: 30, textAlign: "center" }}>+</Text>
                <Text style={{ fontWeight: "900", color: "white", fontSize: 35, textAlign: "center" }}>Free Delivery</Text>
                <Text style={{ fontWeight: "400", color: "#ffb2b2", fontSize: 25, marginBottom: 10, textAlign: "center" }}>on first order</Text>
            </View>
            <Image source={require("../assets/pizza.png")} style={{ width: "100%", height: "35%", position: "absolute", bottom: "-5%", left: 0 }}></Image>
        </View>
    )
}