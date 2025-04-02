import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import axios from "axios"
interface DropdownItem {
    id: string;
    name: string;
  }
  interface BlockData{
     blockCapacity:number
    currentBirdCount:number
    blockType:string
    blockName:string
  }

const AddBlock = () => {
  const [blockName, setBlockName] = useState<string>("");
  const [blockId, setBlockId]=useState<string>();
  const [capacity, setCapacity]=useState<string>("");
  const [birdCount, setBirdCount]=useState<string>("");

 
  const [selectedValue, setSelectedValue] = useState<string>("");
 
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const cancel = () => {
     router.back();  
  };

  const validateForm = () => {
    let errors: { [key: string]: string } = {};

    if (!blockName.trim()) errors.blockName = "Block Name is required";
    if (!birdCount.trim()) errors.birdCount = "Bird Count is required";
    if (!capacity.trim()) errors.capacity = "Capacity is required";

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const AddBlock=async()=>{
    if(!validateForm()){
      return ;
    }
    console.log("Added")
   
    const data:BlockData={
         blockCapacity:Number(capacity),
        currentBirdCount:Number(birdCount),
        blockType: selectedValue,
        blockName:blockName
    }
console.log("Dtaaaaaaaaaa", data)
    try{
        const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYXJtSWQiOiI2N2UyNzA3YzUyNzVmOTI4ZDhmMmNlMDIiLCJmYXJtTmFtZSI6InBvdWx0cnkiLCJmYXJtVHlwZSI6ImNoaWNrIiwiaWF0IjoxNzQzMDY4ODM2LCJleHAiOjE3NDMxNTUyMzZ9.I6hhZ0GbQ0ciAL6xMea4yiVxe74f47YP8X23KJ76Wz8";

        const response = await axios.put("http://172.17.14.155:3001/farm/addBlocks", data,
            {
                headers: {
                  Authorization: `Bearer ${token}`, // Attach token
                  "Content-Type": "application/json",
                },
              }
        )
        console.log(response.status)

        if(response.status === 200){
            setBlockId('')
            setCapacity('')
            setBirdCount('')
            setSelectedValue('')
            setBlockName('')
        }
    }
    catch(error){
        console.log("Error occured", error)
    }
  }

  return (
    <View style={styles.container}>
       
       <Text style={styles.label}>Block Name <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Block Name"
        value={blockName}
        onChangeText={setBlockName}
      />
                  {errors.blockName && <Text style={styles.error}>{errors.blockName}</Text>}
      

<Text style={styles.label}>Capacity <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Block Capacity"
         keyboardType="numeric"
        value={capacity}
        onChangeText={setCapacity}
      />
                        {errors.capacity && <Text style={styles.error}>{errors.capacity}</Text>}

      <Text style={styles.label}>Block Type</Text>

      <View style={styles.pickerWrapper}>
<Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
 
      >
                <Picker.Item label="Select Block Type" value="" />

        <Picker.Item label="Chicken Feed" value="chicken feed" />
        <Picker.Item label="Eggs" value="eggs" />
        <Picker.Item label="Broilers" value="broilers" />
        <Picker.Item label="Layers" value="layers" />
      </Picker>
      </View>

      <Text style={styles.selectedText}>Selected: {selectedValue}</Text>

      <Text style={styles.label}>Current Bird Count <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Current Bird Count"
        value={birdCount}
        onChangeText={setBirdCount}
      />
                        {errors.birdCount && <Text style={styles.error}>{errors.birdCount}</Text>}

      <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
      <Pressable style={{backgroundColor:'#a3a2a2',  padding:10,  marginRight:10, borderRadius:10,  }} onPress={cancel}>
    <Text style={{fontSize:16, fontWeight:'bold', color:'white'}}>Cancel</Text>
   </Pressable>
      <Pressable style={{backgroundColor:'brown', alignItems:'center', padding:10, borderRadius:10}} onPress={AddBlock}>
    <Text style={{fontSize:16, fontWeight:'bold', color:'white'}}>Add Block</Text>
   </Pressable>
      </View>

    </View>
  );
};

export default AddBlock;

const styles=StyleSheet.create({
    container:{
flex:1,
backgroundColor:'#FBF4F4',
paddingHorizontal:15,
paddingTop:10
    },
    label:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        marginTop:5
    },
    input:{
        marginBottom:10,
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginTop:5
    },
   
      selectedText: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: "bold",
      },
      pickerWrapper: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 8,
        marginTop:5,
        height:40,
        justifyContent:'center'
       },
       required: { color: "red" },
       error: { color: "red", fontSize: 12, marginTop: 2 },
})
