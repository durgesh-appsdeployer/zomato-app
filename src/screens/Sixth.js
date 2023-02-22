import { View, Text, Image } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Sixth() {
    return (
        <View style={{ flex: 1, backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
            <View style={{ marginTop: "20%", marginLeft: 50 }}>
                <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40 }}>safe</Text>
                <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40, lineHeight: 40 }}>payments</Text>
                <Text style={{ fontWeight: "500", color: "gray", fontSize: 17, marginBottom: 0, lineHeight: 30 }}>INCLUDING</Text>
                <Text style={{ fontWeight: "500", color: "black", fontSize: 30, marginBottom: 15, lineHeight: 30 }}>cash on delivery</Text>
            </View>
            <View style={{ width: "200%", height: 800, borderRadius: 400, backgroundColor: "#ff204a", position: "absolute", left: "-50%", bottom: "-50%" }}></View>
            <Image source={require("../assets/phone.png")} style={{ width: 370, height: 800, position: 'absolute', bottom: "-25%", left: "5%", zIndex: 1 }}></Image>
            <View style={{ display: "flex", flexDirection: "column", position: "absolute", left: "10%", bottom: "30%", zIndex: 99 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 15, width: "80%", flexWrap: "wrap", height: 160, alignSelf: "center" }}>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", height: 70, width: 70, borderRadius: 10 }}>
                        <Text style={{ fontWeight: "700", color: "black", fontSize: 15, lineHeight: 15 }}>UPI</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", height: 70, width: 70, borderRadius: 10 }}>
                        <Text style={{ fontWeight: "700", color: "black", fontSize: 15, lineHeight: 15, textAlign: "center" }}>cash on delivery</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", height: 70, width: 70, borderRadius: 10 }}>
                        <Text style={{ fontWeight: "700", color: "black", fontSize: 15, lineHeight: 15, textAlign: "center" }}>wallet</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", height: 70, width: 70, borderRadius: 10 }}>
                        <Text style={{ fontWeight: "700", color: "black", fontSize: 15, lineHeight: 15, textAlign: "center" }}>buy now pay later</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", height: 70, width: 70, borderRadius: 10 }}>
                        <Text style={{ fontWeight: "600", color: "black", fontSize: 15, lineHeight: 15, textAlign: "center" }}>debit       & credit cards</Text>
                    </View>
                </View>
                <Image source={require("../assets/pay.png")} style={{ width: "90%", height: "100%", alignSelf: "center", marginBottom: 40 }}></Image>
                <Text style={{ fontWeight: "500", color: "gray", fontSize: 15, lineHeight: 15, textAlign: "center" }}>...and many more payment options</Text>
            </View>
        </View>
    )
}