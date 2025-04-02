import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
const { width } = Dimensions.get('window');

export default function DashboardData() {
    
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
        <View style={styles.iconRow}>
              <Image source={require('../../../../assets/images/image.png')} style={styles.icon} />
              <View style={{flexDirection:'column'}} >
              <Text style={styles.label}> Flock</Text>
              <Text style={styles.label}>10</Text>

              </View>
 
            </View>
            </View>
        <View style={styles.box}>
        <View style={styles.iconRow}>
        <FontAwesome6 name="egg" size={40} color="#9b5959" style={{marginRight:8}}/>
                      <View style={{flexDirection:'column'}} >
              <Text style={styles.label}> Flock</Text>
              <Text style={styles.label}>10</Text>

              </View>
 
            </View>
            </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
        <View style={styles.iconRow}>
              <Image source={require('../../../../assets/images/image.png')} style={styles.icon} />
              <View style={{flexDirection:'column'}} >
              <Text style={styles.label}> Flock</Text>
              <Text style={styles.label}>10</Text>

              </View>
 
            </View>
            </View>
        <View style={styles.box}><Text style={styles.label}>20</Text></View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#824F4A",
      paddingVertical: 15,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    box: {
      width: width * 0.45,
      backgroundColor: '#fff',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      padding: width * 0.03,
      marginHorizontal: width * 0.02,
      marginVertical: width * 0.01,
      elevation: 4,
    },
    iconRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    icon: {
      width: 40, // Adjust icon size
      height: 40,
      marginRight: 8,
    },
    label: {
      fontSize: width * 0.05,
      fontWeight: 'bold',
      color: 'black',
    },
    value: {
      fontSize: width * 0.06,
      fontWeight: 'bold',
      color: 'black',
    }
  });
