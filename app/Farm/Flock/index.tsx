import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

 
interface flockData {
    _id:string
    batchName:string
    blockId:number
    startDate:string
    birdCount:number
    purpose:string
    farmId:string
    blockName:string
}

const FlockListScreen = () => {
  const router = useRouter();
  const [flocksData, setFlocksData] = useState<flockData[]>([])
  const FetchFlockData = useCallback(async () => {
    console.log("Fetching block data...");
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYXJtSWQiOiI2N2UyNzA3YzUyNzVmOTI4ZDhmMmNlMDIiLCJmYXJtTmFtZSI6InBvdWx0cnkiLCJmYXJtVHlwZSI6ImNoaWNrIiwiaWF0IjoxNzQzMDY4ODM2LCJleHAiOjE3NDMxNTUyMzZ9.I6hhZ0GbQ0ciAL6xMea4yiVxe74f47YP8X23KJ76Wz8";
      
      const response = await axios.get("http://172.17.14.155:3001/flock/getAllFlocksFarm", {
        headers: { Authorization: `Bearer ${token}` }, 
      });

      console.log("Flock Data:", response.data.data);
      if(response.status === 200){
        setFlocksData(response.data.data)
      }
    } catch (error) {
      console.error("Error fetching block data:", error);
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      FetchFlockData();
    }, [FetchFlockData]) 
  );

  const getInitials = (str: string): string => {
    return str
      .split(" ") 
      .map(word => word.charAt(0).toUpperCase())  
      .join("");  
  };

  return (
    <View style={styles.container}>
    <FlatList
    showsVerticalScrollIndicator={false}
      data={flocksData}
      keyExtractor={(item:flockData) => item._id}
      renderItem={({ item }) => (
        <View style={styles.blockCard}>
          <Text style={styles.blockName}>{item.batchName}</Text>
          <Text style={styles.blockDetails}>Block Name - {item.blockName || "N/A"}</Text>
          <Text style={styles.blockDetails}>Bird Count - {item.birdCount}</Text>
          <Text style={styles.blockDetails}>Purpose - {item.purpose || "N/A"}</Text>
          <Text style={styles.blockDetails}>Start Date - {new Date(item.startDate).toLocaleDateString()}</Text>
          <View style={styles.avatar}>
            <Avatar.Text size={50} label={getInitials(item.batchName) } style={styles.avatarBackground} />
          </View>
        </View>
      )}
    />
    <TouchableOpacity style={styles.addBlockButton} onPress={() => router.push("/Farm/Flock/AddFlock")}>
      <View style={{ flexDirection: "row" }}>
        <Entypo name="plus" size={24} color="white" />
        <Text style={styles.addBlockText}>Add Flock</Text>
      </View>
    </TouchableOpacity>
  </View>
  );
};

export default FlockListScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FBF4F4',
        padding:10
     },
    avatarBackground:{
        backgroundColor:'#9b5959' 
    },
    avatar:{ 
        position: "absolute", 
        right: 10, 
        top: "50%", 
        transform: [{ translateY: -15 }] 
      },
      blockCard:{backgroundColor:"#FBF4F4", padding:15,  marginVertical:5, borderRadius:15, elevation:4, marginHorizontal:5},
      blockName:{fontSize:18, fontWeight:'bold', color:'#824F4A'},
      blockDetails:{fontSize:14, fontWeight:'bold', marginTop:5},
      addBlockButton:{
        backgroundColor:'#9b5959',
        position:'absolute',
         bottom:20,
        borderRadius:15,
        padding:15,
        right:10
     },
     addBlockText:{fontSize:16, fontWeight:'bold',
        color:'white'
    },
})