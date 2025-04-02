import React from "react";
import { Stack } from "expo-router";

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
          headerTitle: "Flocks",
        }}
      />
       <Stack.Screen
        name="AddFlock"
        options={{
          headerTitle: "Add Flock",         
        }}
      />      
    </Stack>
  );
}
