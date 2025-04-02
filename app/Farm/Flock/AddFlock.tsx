import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity, ScrollView } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import axios from "axios"
import DateTimePicker from '@react-native-community/datetimepicker';

  
 
 
interface BlockData {
  _id: string;
  blockName: string;
  blockId:number
  avilableGap: string
}
 
interface FlockData{
batchName:string
birdCount:string
blockId:number
startDate:Date
purpose:string
flockFrom:string
purchaseAmount:number
}
  

const AddFlock = () => {
    const [blockData, setBlockData] = useState<BlockData[]>([]);

  const [FlockName, setFlockName] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);
    const [birdCount, setBirdCount]=useState<string>("");

  const [blockName, setBlockName] = useState<string>("");

  const [purpose,setPurpose] = useState<string>("");
  const [origin,setOrigin] = useState<string>("");
  const [purchaseAmount,setPurchaseAmount] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  const router = useRouter();
  const onChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const cancel = () => {
     router.back();  
  };

  const FetchBlockData = useCallback(async () => {
    console.log("Fetching block data...");

    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYXJtSWQiOiI2N2UyNzA3YzUyNzVmOTI4ZDhmMmNlMDIiLCJmYXJtTmFtZSI6InBvdWx0cnkiLCJmYXJtVHlwZSI6ImNoaWNrIiwiaWF0IjoxNzQzMDY4ODM2LCJleHAiOjE3NDMxNTUyMzZ9.I6hhZ0GbQ0ciAL6xMea4yiVxe74f47YP8X23KJ76Wz8";
      
      const response = await axios.get("http://172.17.14.155:3001/farm/getAvilableBlocks", {
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

  useEffect(() => {
    FetchBlockData();
  }, []);

  const validateForm = () => {
    let errors: { [key: string]: string } = {};

    if (!FlockName.trim()) errors.FlockName = "Flock Name is required";
    if (!birdCount.trim()) errors.birdCount = "Bird Count is required";
    if (!blockName.trim()) errors.blockName = "Block Name is required";
    if (!purpose.trim()) errors.purpose = "Purpose is required";
    if (!origin.trim()) errors.origin = "Origin is required";
    if (!purchaseAmount.trim()) errors.purchaseAmount = "Purchase Amount is required";
 
    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };


  const AddFlock=async()=>{
    if (!validateForm()) {
      return;  
    }
    console.log("Added")
   
    const data:FlockData={
      batchName:FlockName,
      birdCount:birdCount,
      blockId:1,
      startDate:startDate,
      purpose:purpose,
      flockFrom:origin,
      purchaseAmount:Number(purchaseAmount)
    }
     try{
        const token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYXJtSWQiOiI2N2UyNzA3YzUyNzVmOTI4ZDhmMmNlMDIiLCJmYXJtTmFtZSI6InBvdWx0cnkiLCJmYXJtVHlwZSI6ImNoaWNrIiwiaWF0IjoxNzQzMDgxNTc3LCJleHAiOjE3NDMxNjc5Nzd9.m2N5nxQ2K0PNW5dJDnUUOMmq69wBbFPZTKsKRUZKcUs";

        const response = await axios.post("http://172.17.14.155:3001/flock/addFlock", data,
            {
                headers: {
                  Authorization: `Bearer ${token}`, // Attach token
                  "Content-Type": "application/json",
                },
              }
        )
        console.log(response.status)

        if(response.status === 200){
           console.log("Flock Addedcsuccessfully")
           setFlockName('')
           setBirdCount('')
           setStartDate(new Date())
           setBlockName('')
           setPurchaseAmount('')
           setOrigin('')
           setPurpose('')
        }
    }
    catch(error){
        console.log("Error occured", error)
    }
  }

  return (
    <ScrollView >
      <View style={styles.container}>
      <Text style={styles.label}>Flock Name  <Text style={styles.required}>*</Text></Text>
      <TextInput
  style={styles.input}
  placeholder="Enter Flock Name"
  value={FlockName}
  onChangeText={(text) => {
    setFlockName(text);
    if (text.trim()) {
      console.log("FLOCK NAME", text.trim(), text.trim().length > 0 )
      setErrors((prevErrors) => ({ ...prevErrors, FlockName: text.trim().length >= 1 ? "" : "Flock Name is required",
      }));
    }
  }}
/>
{errors.FlockName && <Text style={styles.error}>{errors.FlockName}</Text>}

 
       <Text style={styles.label}>Bird Count  <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Bird Count"
        value={birdCount}
        onChangeText={setBirdCount}
      />
      {errors.birdCount && <Text style={styles.error}>{errors.birdCount}</Text>}

<Text style={styles.label}>Start Date  <Text style={styles.required}>*</Text></Text>
      <TouchableOpacity style={styles.dateInput} onPress={() => setShowPicker(true)}>
        <Text style={styles.dateText}>
          {startDate ? startDate.toDateString() : "Select a Date"}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

<Text style={styles.label}>Purchase Amount  <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Purchase Amount"
        value={purchaseAmount}
        onChangeText={setPurchaseAmount}
      />
      {errors.purchaseAmount && <Text style={styles.error}>{errors.purchaseAmount}</Text>}

<Text style={styles.label}>Block Name  <Text style={styles.required}>*</Text></Text>
<View style={styles.pickerWrapper}>
<Picker
        selectedValue={blockName}
        onValueChange={(itemValue) => setBlockName(itemValue)}
      
      >
        <Picker.Item label="Select a block - Available Slots" value="" color="#888" />
        {blockData.map((block) => (
          <Picker.Item key={block._id} label={`${block.blockName} - ${block.avilableGap}`} value={block.blockId} />
        ))}
      </Picker>
      </View>

      {errors.blockName && <Text style={styles.error}>{errors.blockName}</Text>}

      <Text style={styles.label}>Origin/Aquisition  <Text style={styles.required}>*</Text></Text>

<View style={styles.pickerWrapper}>
<Picker
  selectedValue={origin}
  onValueChange={(itemValue) => setOrigin(itemValue)}
 
>
          <Picker.Item label="Select Origin" value="" color="#888"/>

  <Picker.Item label="Purchased" value="Purchased" />
  <Picker.Item label="Hatched on Farm" value="Hatched on Farm" />
  <Picker.Item label="Gift" value="Gift" />
  <Picker.Item label="Others" value="Others" />
</Picker>
</View>
{errors.origin && <Text style={styles.error}>{errors.origin}</Text>}

      <Text style={styles.label}>Purpose  <Text style={styles.required}>*</Text></Text>

      <View style={styles.pickerWrapper}>
<Picker
        selectedValue={purpose}
        onValueChange={(itemValue) => setPurpose(itemValue)}
  
      >
                <Picker.Item label="Select Flock Purpose" value="" color="#888"/>

        <Picker.Item label="Chicken Feed" value="chicken feed" />
        <Picker.Item label="Eggs" value="eggs" />
        <Picker.Item label="Broilers" value="broilers" />
        <Picker.Item label="Layers" value="layers" />
      </Picker>
      </View>

      {errors.purpose && <Text style={styles.error}>{errors.purpose}</Text>}


      <Text style={styles.selectedText}>Selected: {purpose}</Text>

      
     
      <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
      <Pressable style={{backgroundColor:'#a3a2a2',  padding:10,  marginRight:10, borderRadius:10,  }} onPress={cancel}>
    <Text style={{fontSize:16, fontWeight:'bold', color:'white'}}>Cancel</Text>
   </Pressable>
      <Pressable style={{backgroundColor:'brown', alignItems:'center', padding:10, borderRadius:10}} onPress={AddFlock}>
    <Text style={{fontSize:16, fontWeight:'bold', color:'white'}}>Add Flock</Text>
   </Pressable>
      </View>
      </View>
    </ScrollView>
  );
};

export default AddFlock;

const styles=StyleSheet.create({
    container:{
flex:1,
backgroundColor:'#FBF4F4',
paddingHorizontal:20,
paddingVertical:10
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
        marginTop:5,
     },
  
      selectedText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "bold",
      },
      pickerWrapper: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 8,
        marginTop:5,
        marginBottom:10,
        height: 40,
        justifyContent:'center'

       },
       dateInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
marginTop:5,
marginBottom:10
      },
      dateText: {
        fontSize: 16,
      },
      required: { color: "red" },
      error: { color: "red", fontSize: 12, marginTop: 2 },
})
