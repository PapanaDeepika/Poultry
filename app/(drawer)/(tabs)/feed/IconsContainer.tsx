import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons, Ionicons, FontAwesome6, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>

      <View style={styles.grid}>
        {/* Image with Label */}
        <View style={styles.item}>
          <View style={styles.iconContainer}>
                   <Image source={require('../../../../assets/images/image.png')} style={styles.image} />
           
          </View>
          <Text style={styles.label}>Flocks</Text>
        </View>

        {/* Expo Icons with Labels */}
        <View style={styles.item}>
          <View style={styles.iconContainer}>
          <FontAwesome6 name="bowl-food" size={30} color="white" />          </View>
          <Text style={styles.label}>Feed</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
          <MaterialIcons name="health-and-safety" size={30} color="white" />
                    </View>
          <Text style={styles.label}>Health</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
          <FontAwesome6 name="egg" size={30} color="white" />
                    </View>
          <Text style={styles.label}>Eggs</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
          <FontAwesome name="building" size={30} color="white" />          </View>
          <Text style={styles.label}>Blocks</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContainer}>
          <FontAwesome5 name="users" size={30} color="white" />
                    </View>
          <Text style={styles.label}>Customers</Text>
        </View>

        <TouchableOpacity style={styles.item} onPress={() => router.push("/Farm/Flock")} >
          <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="cash-plus" size={30} color="white" />   
                 </View>
          <Text style={styles.label}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => router.push("/Farm/Block")}>
      <View style={styles.iconContainer}>
      <MaterialCommunityIcons name="cash-minus" size={30} color="white" />   
             </View>

       <Text style={styles.label}>Expense</Text>
    </TouchableOpacity>

       

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     marginTop: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom:10
   },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    rowGap: 10, // Spacing between items
    columnGap:20
  },
  item: {
    alignItems: "center",
    width: 80, // Ensures label stays centered
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#824F4A",
    alignItems: "center",
    justifyContent: "center",
   },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    tintColor:'white'
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
});

export default Categories;


// import React from "react";
// import { View, Text, Image, FlatList, StyleSheet } from "react-native";
// import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";

// const CategoriesScreen = () => {
//   const data = [
//     { id: "1", type: "image", source: require("../../../../assets/images/image.png"), label: "Flock" }, 
//     { id: "2", type: "icon", icon: <FontAwesome name="shopping-cart" size={30} color="white" />, label: "Eggs" },
//     { id: "3", type: "icon", icon: <MaterialIcons name="restaurant" size={30} color="white" />, label: "Feed" },
//     { id: "4", type: "icon", icon: <Entypo name="drink" size={30} color="white" />, label: "Water" },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Categories</Text>

//       <FlatList
//         data={data}
//         numColumns={4} // 4 icons per row
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <View style={styles.iconContainer}>
//               {item.type === "image" ? (
//                 <Image source={item.source} style={styles.image} />
//               ) : (
//                 item.icon
//               )}
//             </View>
//             <Text style={styles.label}>{item.label}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     padding: 20,
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 15,
//     textAlign: "center",
//   },
//   itemContainer: {
//     alignItems: "center",
//     width: 80, // Keeps label centered
//     marginVertical: 10,
//   },
//   iconContainer: {
//     width: 70,
//     height: 70,
//     backgroundColor: "#824F4A",
//     borderRadius: 35, // Makes it round
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: 40,
//     height: 40,
//     resizeMode: "contain",
//   },
//   label: {
//     marginTop: 5,
//     fontSize: 14,
//     fontWeight: "500",
//     color: "black",
//     textAlign: "center",
//   },
// });

// export default CategoriesScreen;

