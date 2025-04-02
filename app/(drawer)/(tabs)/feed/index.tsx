import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import DashboardData from './DashboardData';
import DashboardData1 from './DashboardData1';
import CategoriesScreen from './IconsContainer';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 20,  }}>
        
        {/* Farm Image */}
                <Image source={require('../../../../assets/images/poultry.webp')} style={styles.icon} ></Image>
        

        {/* Text Section */}
        <View style={{ marginLeft: 10, justifyContent: 'center' }}>
          <Text style={styles.welcomeText}>Welcome Farm</Text>
          <Text style={styles.subText}>Manage your poultry farm efficiently!</Text>
        </View>


      </View>
      <DashboardData1 />
       
      <CategoriesScreen/>


    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FBF4F4' },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5a3e2b',
  },
  subText: {
    fontSize: 14,
    color: '#000',
   },
   icon:{
    height:60,
    width:60,
    borderRadius:30
   }
});
