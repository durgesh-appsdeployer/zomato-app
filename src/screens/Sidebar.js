import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function Sidebar({ navigation }) {
  return (
    <>
      <Drawer.Navigator>
        {/* <Drawer.Screen name="payment" component={Payments} options={{ title: 'Loading', headerShown: false }} /> */}
      </Drawer.Navigator>
    </>
  )
}