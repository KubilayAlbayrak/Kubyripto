import React from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';




const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Saly-1.png')} style={styles.image}/>
      <Text style={styles.header1}>Welcome To Kubyripto</Text>
      <Text style={styles.header2}>Invest your virtual $100.000 and comple with others</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  image:{
    height:'70%',
    width:'100%',
  },
  container:{
    padding:20,
    alignItems:'center'
  },
  header1:{
    fontWeight:'bold',
    fontSize:24,
    marginTop:30
  },
  header2:{
    fontSize:20,
    marginTop:25
  }
});

export default HomeScreen;