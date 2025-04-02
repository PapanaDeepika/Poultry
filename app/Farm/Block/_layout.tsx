import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
       headerStyle:{
        backgroundColor:'#9b5959',
       },
    headerTintColor:'white'
       }}
    >
 
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Blocks",
          
        }}
      />
       <Stack.Screen
        name="AddBlock"
        options={{
          headerTitle: "Add Block",
          
        }}
      />
      
    </Stack>
  );
}
