import { View, Image, Text } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Fourth() {
    return (
        <View style={{ flex: 1, backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
            <View style={{ marginTop: "20%", marginLeft: 50 }}>
                <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40 }}>real time</Text>
                <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40, lineHeight: 40 }}>food order</Text>
                <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40, marginBottom: 15, lineHeight: 40 }}>tracking</Text>
                <Text style={{ fontWeight: "500", color: "gray", fontSize: 17, marginBottom: 10 }}>+24x7 CHAT SUPPORT</Text>
            </View>
            <View style={{ width: "200%", height: 800, borderRadius: 400, backgroundColor: "#ff204a", position: "absolute", left: "-50%", bottom: "-50%" }}></View>
            <Image source={require("../assets/phone.png")} style={{ width: 370, height: 800, position: 'absolute', bottom: "-25%", left: "5%", zIndex: 1 }}></Image>
            <View style={{ display: "flex", flexDirection: "column", position: "absolute", left: "17%", bottom: "0%", zIndex: 99 }}>
                <View style={{ marginLeft: 20, marginBottom: 15 }}>
                    <Text style={{ fontWeight: "800", color: "black", fontSize: 25 }}>order is on the way</Text>
                </View>
                <Image source={require("../assets/map.jpeg")} style={{ width: 350, height: 180, left: "-10%", borderRadius: 10, marginBottom: 20 }}></Image>
                <View style={{ display: "flex", flexDirection: "column", gap: 10, height: 220, width: "80%"}}>
                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#ececec", justifyContent: "flex-start", alignItems: "center", height: 50, width: "95%", alignSelf: "center", borderRadius: 5, gap: 20, paddingLeft: 20 }}>
                        <FontAwesome5 name={'user'} size={25} color="gray" />
                        <Text style={{ fontWeight: 700, color: "black" }}>Need help with this order!</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#ececec", justifyContent: "flex-start", alignItems: "center", height: 50, width: "95%", alignSelf: "center", borderRadius: 5, gap: 20, paddingLeft: 20 }}>
                        <FontAwesome5 name={'phone'} size={25} color="gray" />
                        <Text style={{ fontWeight: 700, color: "black" }}>Get a callback</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#ececec", justifyContent: "flex-start", alignItems: "center", height: 50, width: "95%", alignSelf: "center", borderRadius: 5, gap: 20, paddingLeft: 20 }}>
                        <FontAwesome5 name={'comment'} size={25} color="gray" />
                        <Text style={{ fontWeight: 700, color: "black" }}>Chat with us</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}