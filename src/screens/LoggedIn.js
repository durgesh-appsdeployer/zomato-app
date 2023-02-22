import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function LoggedIn(props) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
           <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                <Text style={{ fontWeight: "500", color: "black", fontSize: 18, marginTop: 10 }}>You are Logged in as {props.route.params.number} </Text>
            </View>
        </SafeAreaView>
    )
}