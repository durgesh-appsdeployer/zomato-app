import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

export default function Otp(props) {
    const [code, setCode] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                <Text style={{ fontWeight: "500", color: "black", fontSize: 13, marginTop: 10 }}>We have sent a verification code to </Text>
                <Text style={{ fontWeight: "500", color: "black", fontSize: 13, marginTop: 10, marginBottom: 50 }}>{props.route.params.number}</Text>
                <TextInput
                    cursorColor="dodgerblue"
                    style={{
                        color: 'black',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: 'lightgray',
                        padding: 10,
                        height: '15%',
                        width: '90%',
                        fontSize: 15,
                        marginBottom: '5%',
                    }}
                    value={code}
                    onChangeText={n => { setCode(n) }}
                />
                <TouchableOpacity title="Upload File" style={{ borderWidth: 1, borderColor: "red", height: 50, width: "90%", backgroundColor: "#ff204a", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 0, alignSelf: "center", marginBottom: 10 }}
                    onPress={() => props.route.params.confirmCode(code, props.route.params.confirm)}>
                    <Text style={{ color: "white", fontSize: 15, color: "white", fontWeight: "600" }}>Verify</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}