import { View, Text, Button } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import { Feather, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function _layout() {
  return (
   <Tabs screenOptions={{headerLeft: () => <DrawerToggleButton tintColor='#000' />,
    tabBarActiveTintColor:"white",
    tabBarInactiveTintColor:"#ccc",
    tabBarStyle: {
      height: 70, 
       backgroundColor: '#9b5959',
       borderTopRightRadius:20,
       borderTopLeftRadius:20,
       paddingTop:10
     },
     headerStyle:{
      backgroundColor:'#9b5959'
     },
   
    tabBarLabelStyle: {
      fontSize: 12,
     },
    }}>
    <Tabs.Screen name='feed' options={{
      tabBarIcon: ({color}) => (
<MaterialIcons name="home" size={24} color={color} />
      ),
      tabBarLabel: 'Home',
      headerTitle: '',
     }} />
    <Tabs.Screen name='profile' options={{
      tabBarIcon: ({color}) => (
        <Ionicons name="settings" size={24} color={color} />
      ),
      tabBarLabel: 'Settings',
      headerTitle: 'Profile',
        headerRight: () => <Button onPress={() => router.push('/about')} title='Add Post'/>
    }} />
  
   </Tabs>
  )
}