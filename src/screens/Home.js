import { View, Text, ScrollView, TextInput, StyleSheet, Image, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useState } from 'react';
import { useGetItemQuery, useGetItemByTypeQuery } from '../redux/services';

export default function Home() {
    const [data, setData] = useState();
    const [seafood, setSeafood] = useState();
    const [dessert, setDessert] = useState();
    const [chicken, setChicken] = useState();

    const state = useGetItemQuery();
    const stateForSeafood = useGetItemByTypeQuery("Seafood");
    const stateForDessert = useGetItemByTypeQuery("Dessert");
    const stateForChicken = useGetItemByTypeQuery("Chicken");

    setTimeout(() => { setData(state.data); setSeafood(stateForSeafood.data); setDessert(stateForDessert.data); setChicken(stateForChicken.data) }, 4000)

    if (state.isLoading) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingHorizontal: 10, backgroundColor: "white" }}>
                <View style={{ height: 60, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                    <View><FontAwesome5 name={'home'} size={25} color="red" /></View>
                    <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                        <Text style={{ fontWeight: "700", color: "black", fontSize: 18 }}>Home</Text>
                        <Text style={{ fontWeight: "600", color: "gray", fontSize: 13 }}>Lane No. 1, Chaitanya Park, Ni...</Text>
                    </View>
                    <View style={styles.tabSlices}><Text style={{ color: "black", fontWeight: 700 }}><FontAwesome5 name={'globe'} size={15} color="black" /> English</Text></View>
                    <View><FontAwesome5 name={'user'} size={25} color="red" /></View>
                </View>
                <View style={{ height: 60, width: "100%" }}>
                    <View style={{ backgroundColor: "#ececec", borderWidth: 1, borderColor: "#c3c3c3", borderRadius: 10, width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 15 }}>
                        <FontAwesome5 name={'search'} size={20} color="red" />
                        <TextInput style={{ borderRightWidth: 1, borderColor: "gray", width: "75%", height: "80%" }}></TextInput>
                        <FontAwesome5 name={'microphone'} size={20} color="red" />
                    </View>
                </View>
                <View style={{ width: "100%", height: 50, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", overflow: "scroll" }}>
                    <ScrollView horizontal={true} fadingEdgeLength={90} showsHorizontalScrollIndicator={false}>
                        <View style={styles.tabSlices}><Text style={{ color: "black", fontWeight: 700 }}>Fast Delivery</Text></View>
                        <View style={styles.tabSlices}><Text style={{ color: "black", fontWeight: 700 }}>Great Offers</Text></View>
                        <View style={styles.tabSlices}><Text style={{ color: "black", fontWeight: 700 }}>Rating 4.0+</Text></View>
                        <View style={styles.tabSlices}><Text style={{ color: "black", fontWeight: 700 }}>New Arrivals</Text></View>
                        <View style={styles.tabSlices}><Text style={{ color: "black", fontWeight: 700 }}>Pure veg</Text></View>
                        <View style={styles.tabSlices}><Text style={{ color: "black", fontWeight: 700 }}>Cuisines</Text></View>
                        <View style={styles.tabSlices}><Text style={{ color: "black", fontWeight: 700 }}>More ▾</Text></View>
                    </ScrollView>
                </View>
            </View>
            <ScrollView style={{ height: 1400, paddingTop: 20, borderWidth: 0 }}>
                <View style={{ marginHorizontal: 10, backgroundColor: "black", height: 120, width: "90%", alignSelf: "center", borderRadius: 20, padding: 20, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 40 }}>
                    <View>
                        <Text style={{ fontWeight: "500", color: "white", fontSize: 15 }}>Introducing</Text>
                        <Text style={{ fontWeight: "800", color: "white", fontSize: 20, marginBottom: 10 }}>Zomato Gold</Text>
                        <Text style={{ fontWeight: "500", color: "white", fontSize: 15 }}>You are invited! Join now </Text>
                    </View>
                    <Image source={require("../assets/gold.png")} style={{ width: 100, height: 100 }}></Image>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 20, alignSelf: "center", height: 100, width: "90%" }}>
                    <Text style={{ fontWeight: "800", color: "black", fontSize: 20, marginBottom: 10 }}>Zomato Gold</Text>
                    <ScrollView horizontal={true} fadingEdgeLength={90} showsHorizontalScrollIndicator={false}>
                        <View style={{ display: "flex", flexDirection: "column" }}>
                            <View style={{ border: 2, height: 80, width: "100%", display: "flex", flexDirection: "row", gap: 28 }}>
                                <Image source={require("../assets/R1.jpg")} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                                <Image source={require("../assets/R1.jpg")} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                                <Image source={require("../assets/R1.jpg")} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                                <Image source={require("../assets/R1.jpg")} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                                <Image source={require("../assets/R1.jpg")} style={{ width: 70, height: 70, borderRadius: 10 }}></Image>
                            </View>
                        </View>
                    </ScrollView>
                </View>



                {data ?
                    <View style={{ width: "100%", height: 150, marginTop: 40 }}>
                        <Text style={{ color: "black", fontWeight: "700", fontSize: 20, marginLeft: 10, marginBottom: 15 }}>Categories</Text>
                        <FlatList horizontal={true} nestedScrollEnabled={true} data={data.categories} showsHorizontalScrollIndicator={false}
                            renderItem={(item) => {
                                return (
                                    <View key={item.item.idCategory} style={{ height: "90%", width: 300, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 20, backgroundColor: "white", elevation: 5, borderRadius: 10, marginHorizontal: 10 }}>
                                        <Image source={{ uri: item.item.strCategoryThumb }} style={{ width: 110, height: 70 }}></Image>
                                        <View>
                                            <Text style={{ color: "black", fontWeight: "700" }}>{item.item.strCategory}</Text>
                                            <Text style={{ color: "black", overflow: "hidden", height: 70, width: 170 }}>{item.item.strCategoryDescription}</Text>

                                        </View>
                                    </View>)
                            }}
                            keyExtractor={(item) => { item.index }}>
                        </FlatList>
                    </View>
                    : null
                }

                {seafood ?
                    <View style={{ width: "100%", height: 150, marginTop: 40 }}>
                        <Text style={{ color: "black", fontWeight: "700", fontSize: 20, marginLeft: 10, marginBottom: 15 }}>Seafood</Text>
                        <FlatList horizontal={true} nestedScrollEnabled={true} data={seafood.meals} showsHorizontalScrollIndicator={false}
                            renderItem={(item) => {
                                return (
                                    <View key={item.item.idMeal} style={{ height: "90%", width: 300, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 20, backgroundColor: "white", elevation: 5, borderRadius: 10, marginHorizontal: 10, overflow: "hidden" }}>
                                        <Image source={{ uri: item.item.strMealThumb }} style={{ width: 130, height: "100%" }}></Image>
                                        <View>
                                            <Text key={item.item.idMeal} style={{ color: "black", fontWeight: "700", height: 70, width: "40%" }}>{item.item.strMeal}</Text>
                                        </View>
                                    </View>)
                            }}
                            keyExtractor={(item) => { item.index }}>
                        </FlatList>
                    </View>
                    : null
                }

                {dessert ?
                    <View style={{ width: "100%", height: 150, marginTop: 40 }}>
                        <Text style={{ color: "black", fontWeight: "700", fontSize: 20, marginLeft: 10, marginBottom: 15 }}>Desserts</Text>
                        <FlatList horizontal={true} nestedScrollEnabled={true} data={dessert.meals} showsHorizontalScrollIndicator={false}
                            renderItem={(item) => {
                                return (
                                    <View key={item.item.idMeal} style={{ height: "90%", width: 300, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 20, backgroundColor: "white", elevation: 5, borderRadius: 10, marginHorizontal: 10, overflow: "hidden" }}>
                                        <Image source={{ uri: item.item.strMealThumb }} style={{ width: 130, height: "100%" }}></Image>
                                        <View>
                                            <Text key={item.item.idMeal} style={{ color: "black", fontWeight: "700", height: 70, width: "80%" }}>{item.item.strMeal}</Text>
                                        </View>
                                    </View>)
                            }}
                            keyExtractor={(item) => { item.index }}>
                        </FlatList>
                    </View>
                    : null
                }

                {chicken ?
                    <View style={{ width: "100%", height: 150, marginTop: 40 }}>
                        <Text style={{ color: "black", fontWeight: "700", fontSize: 20, marginLeft: 10, marginBottom: 15 }}>Non-vegeterian</Text>
                        <FlatList horizontal={true} nestedScrollEnabled={true} data={chicken.meals} showsHorizontalScrollIndicator={false}
                            renderItem={(item) => {
                                return (
                                    <View key={item.item.idMeal} style={{ height: "90%", width: 300, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 20, backgroundColor: "white", elevation: 5, borderRadius: 10, marginHorizontal: 10, overflow: "hidden" }}>
                                        <Image source={{ uri: item.item.strMealThumb }} style={{ width: 130, height: "100%" }}></Image>
                                        <View>
                                            <Text key={item.item.idMeal} style={{ color: "black", fontWeight: "700", height: 70, width: "80%" }}>{item.item.strMeal}</Text>
                                        </View>
                                    </View>)
                            }}
                            keyExtractor={(item) => { item.index }}>
                        </FlatList>
                    </View>
                    : null
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    tabSlices: {
        borderWidth: 1,
        borderColor: "#c3c3c3",
        height: 35,
        borderRadius: 8,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        backgroundColor: "white",
        elevation: 3
    },
    scrollContainer: {
        height: 600,
        width: "100%",
        borderWidth: 1,
        borderColor: "lightgray",
        marginTop: 40,
        borderRadius: 5
    },
    incompleteTodo: {
        backgroundColor: "white",
        marginHorizontal: 7,
        marginVertical: 7,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        elevation: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        height: 100,
    },
    completeTodo: {
        backgroundColor: "#b3f4cb",
        marginHorizontal: 7,
        marginVertical: 7,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        elevation: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        height: 100,
    },
    todoText: {
        color: "gray"
    }
})