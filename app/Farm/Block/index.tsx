import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

// {"_id": "67e4174100b6a41cdf6bcb96", 
// "blockCapacity": 200,
//  "blockId": 1, 
// "blockType": 
// "eggs", 
// "currentBirdCount": 100}

interface blockdata{
    _id:string
    blockCapacity:number
    blockId:number
    blockType?:string
    currentBirdCount:number
    blockName:string
}

const BlockListScreen = () => {
  const router = useRouter();
  const [blockData, setBlockData] = useState([])
  const FetchBlockData = useCallback(async () => {
    console.log("Fetching block data...");

    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYXJtSWQiOiI2N2UyNzA3YzUyNzVmOTI4ZDhmMmNlMDIiLCJmYXJtTmFtZSI6InBvdWx0cnkiLCJmYXJtVHlwZSI6ImNoaWNrIiwiaWF0IjoxNzQzMDY4ODM2LCJleHAiOjE3NDMxNTUyMzZ9.I6hhZ0GbQ0ciAL6xMea4yiVxe74f47YP8X23KJ76Wz8";
      
      const response = await axios.get("http://172.17.14.155:3001/farm/getBlockData", {
        headers: { Authorization: `Bearer ${token}` }, 
      });

      console.log("Block Data:", response.data.data);
      if(response.status === 200){
        setBlockData(response.data.data)
      }
    } catch (error) {
      console.error("Error fetching block data:", error);
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      FetchBlockData();
    }, [FetchBlockData]) 
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
      data={blockData}
      keyExtractor={(item:blockdata) => item._id}
      renderItem={({ item }) => (
        <View style={styles.blockCard}>
          <Text style={styles.blockName}>{item.blockName}</Text>
          <Text style={styles.blockDetails}>Block Id - {item.blockId}</Text>
          <Text style={styles.blockDetails}>Capacity - {item.blockCapacity}</Text>
          <Text style={styles.blockDetails}>Block Type - {item.blockType || "N/A"}</Text>
          <Text style={styles.blockDetails}>Current Bird Count - {item.currentBirdCount}</Text>

          <View style={styles.avatar}>
            <Avatar.Text size={50} label={getInitials(item.blockName) } style={styles.avatarBackground} />
          </View>
        </View>
      )}
    />

    <TouchableOpacity style={styles.addBlockButton} onPress={() => router.push("/Farm/Block/AddBlock")}>
      <View style={{ flexDirection: "row" }}>
        <Entypo name="plus" size={24} color="white" />
        <Text style={styles.addBlockText}>Add Block</Text>
      </View>
    </TouchableOpacity>
  </View>
  );
};

export default BlockListScreen;


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
        transform: [{ translateY: -15 }] // Adjust to vertically center
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