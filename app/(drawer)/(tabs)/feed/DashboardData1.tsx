import { FontAwesome, FontAwesome5, Foundation } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";

const { width } = Dimensions.get("window");

const DashboardData1 = () => {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.leftBox} >
        <View style={{flexDirection:'row',   justifyContent:'center'}}>
        <View style={{flexDirection:'row', alignItems:"center",  }}>
          
            <Foundation name="graph-pie" size={22} color="green" />
            <Text style={{marginHorizontal:5, fontSize:14, fontWeight:'bold'}}>Income</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:"center"}}>
          <Foundation name="graph-pie" size={22} color="red" />
          
          <Text style={{marginHorizontal:5, fontSize:14, fontWeight:'bold'}}>Expense</Text>
          </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5,paddingHorizontal:20 }}>
  <FontAwesome name="long-arrow-up" size={24} color="green" style={{ marginRight: 8 }} />

  <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Income</Text>
    <Text style={{ fontSize: 16 }}>$100</Text>
  </View>
</View>

<View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 , paddingHorizontal:20}}>
  <FontAwesome name="long-arrow-down" size={24} color="red" style={{ marginRight: 8 }} />

  <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Expense</Text>
    <Text style={{ fontSize: 16 }}>$100</Text>
  </View>
</View>


 
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightBox} >
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5,paddingHorizontal:20 }}>
        <Image source={require('../../../../assets/images/image.png')} style={styles.icon} />

  <View style={{ flexDirection: 'column',  }}>
    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Flock</Text>
    <Text style={{ fontSize: 14 }}>500</Text>
  </View>
</View>
      </View>
        <View style={styles.rightBox} >

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5,paddingHorizontal:20,  }}>
  <FontAwesome5 name="users" size={24} color="brown" style={{ marginRight: 8 }} />

  <View style={{ flexDirection: 'column',   }}>
    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Customers</Text>
    <Text style={{ fontSize: 16 }}>100</Text>
  </View>
</View>
        </View>
      </View>
    </View>
    <View style={styles.blackBox}>
  <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, flex: 1,  }}>
    <FontAwesome name="long-arrow-up" size={24} color="green" style={{ marginRight: 8 }} />
    <FontAwesome name="long-arrow-down" size={24} color="red" style={{ marginRight: 8 }} />
    <Text style={{ fontSize: 14, fontWeight: 'bold', color: "black" }}>Profit</Text>

    {/* Push the profit number to the end */}
    <View style={{ flex: 1, alignItems: 'flex-end' ,  }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: "black" }}>200</Text>
    </View>
  </View>
</View>


         </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
     justifyContent: "center",
   },
  leftBox: {
    width: width / 2, // Takes half of the screen width
    height: 135,
    backgroundColor: "white",
    marginRight: 5,
    borderRadius:15,
    elevation:4
  },
  rightContainer: {
    justifyContent: "space-between",
  },
  rightBox: {
    width: width / 2 - 20, // Slightly smaller than half width to fit properly
    height: 65,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius:15,
    elevation:4,
    justifyContent:'center'


  },
  blackBox: {
    width: width - 10, // Slightly smaller than full width
    backgroundColor: "#f2f2f2",
    height: 50,
     margin: 5, // Adds space on left & right
    borderRadius: 15, // Optional: makes edges rounded,
    elevation:4

   },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
   },
  icon: {
    width: 35, // Adjust icon size
    height: 30,
    marginRight: 8,
    tintColor:'brown'
  },
  label: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DashboardData1;
