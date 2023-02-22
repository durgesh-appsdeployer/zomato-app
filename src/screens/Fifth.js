import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Fifth() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
        <View style={{ marginTop: "20%", marginLeft: 50, position: "absolute", bottom: "10%", right: "10%" }}>
            <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40, textAlign: "right", lineHeight: 40}}>what's new</Text>
            <Text style={{ fontWeight: "500", color: "#ff204a", fontSize: 40, textAlign: "right", lineHeight: 40}}>on dining?</Text>
            <Text style={{ fontWeight: "500", color: "black", fontSize: 30, textAlign: "right" }}>biggest discounts</Text>
            <Text style={{ fontWeight: "500", color: "black", fontSize: 30, textAlign: "right" }}>and vibe-check</Text>
        </View>
        <View style={{ width: "200%", height: 800, borderRadius: 400, backgroundColor: "#ff204a", position: "absolute", left: "-50%", top: "-40%" }}></View>
        <Image source={require("../assets/phone.png")} style={{ width: 370, height: 800, position: 'absolute', top: "-25%", left: "5%", zIndex: 1 }}></Image>
        <View style={{ display: "flex", flexDirection: "column", position: "absolute", left: "16%", top: "0%", zIndex: 99, height: 500, width: "68%", borderBottomStartRadius: 40, borderBottomEndRadius: 40, }}>
            <View style={{display: "flex", flexDirection: "row", gap: 15, justifyContent: 'center', marginVertical: 5}}>
                <Text style={{fontWeight: "600", color: "#ff204a", borderBottomWidth: 2, borderBottomColor: "#ff204a" }}>Vibes</Text>
                <Text style={{fontWeight: "600", color: "gray"}}>Offers</Text>
                <Text style={{fontWeight: "600", color: "gray"}}>Photos</Text>
                <Text style={{fontWeight: "600", color: "gray"}}>Menu</Text>
                <Text style={{fontWeight: "600", color: "gray"}}>Review</Text>
            </View>
            <View style={{backgroundColor: "black", borderRadius: 5, display: "flex", flexDirection: "column", height: 270}}>
                <View style={{marginTop: 20, marginLeft: 20, marginBottom: 20}}>
                    <Text style={{color: "white",fontWeight: "500", fontSize: 25, lineHeight: 30}}>vibe check</Text>
                    <Text style={{color: "white",fontWeight: "400", fontSize: 15, lineHeight: 15}}>feel the vibe before you head out!</Text>
                </View>
                <Image source={require("../assets/vibecheck.jpg")} style={{width: "100%", height: "55%"}}></Image>
            </View>
            <View style={{width: 350, height: 120, left: "-12%", borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: "gray", marginTop: 10, backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 10}}>
                <Text style={{color: "black",fontWeight: "500", fontSize: 22, lineHeight: 30, marginBottom: 8}}>looking for discounts?</Text>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10}}>
                    <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", height: 60, width: 60, borderRadius: 10}}>
                        <Text style={{fontWeight: "600", color: "gray", fontSize: 10, lineHeight: 15}}>ALL</Text>
                        <Text style={{fontWeight: "800", color: "black", fontSize: 15, lineHeight: 15}}>zomato</Text>
                        <Text style={{fontWeight: "600", color: "gray", fontSize: 10, lineHeight: 15}}>OFFERS</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", height: 60, width: 60, borderRadius: 10}}>
                        <Text style={{fontWeight: "600", color: "gray", fontSize: 10, lineHeight: 15}}>MIN</Text>
                        <Text style={{fontWeight: "800", color: "black", fontSize: 15, lineHeight: 15}}>30%</Text>
                        <Text style={{fontWeight: "600", color: "gray", fontSize: 10, lineHeight: 15}}>OFF</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", height: 60, width: 60, borderRadius: 10}}>
                        <Text style={{fontWeight: "600", color: "gray", fontSize: 10, lineHeight: 15}}>MIN</Text>
                        <Text style={{fontWeight: "800", color: "black", fontSize: 15, lineHeight: 15}}>20%</Text>
                        <Text style={{fontWeight: "600", color: "gray", fontSize: 10, lineHeight: 15}}>OFF</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "lightgray", height: 60, width: 60, borderRadius: 10}}>
                        <Text style={{fontWeight: "600", color: "gray", fontSize: 10, lineHeight: 15}}>MIN</Text>
                        <Text style={{fontWeight: "800", color: "black", fontSize: 15, lineHeight: 15}}>15%</Text>
                        <Text style={{fontWeight: "600", color: "gray", fontSize: 10, lineHeight: 15}}>OFF</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity title="Upload File" style={{borderWidth: 1, borderColor: "red", height: 45, width: "60%", backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 0, alignSelf: "center" }}>
                <Text style={{ color: "white", fontSize: 15, color: "#ff204a", fontWeight: "600" }}>Book a table</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}