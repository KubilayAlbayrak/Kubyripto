import React,{useState} from 'react';
import { StyleSheet,View,Text,Image, TouchableHighlight,TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';






const ProfileScreen = ({navigation}) => {

const [user, setUser] = useState({
    id:'1',
    name:'Kubilay',
    email:'skubilayalbayrak@gmail.com',
    image:'../assets/images/user.png',
    netWorth:12312
  });
  
  const signOut = () => {
    navigation.navigate('Root')
  }
  

  return (
      <View>
      <Image source={require('../assets/images/Saly-16.png')} style={styles.image}/>
      <View style={styles.userContainer}>
      <Avatar 
      size='large'
      rounded
      source={require('../assets/images/user.png')} 
      />
      <View >
      <Text style={{fontWeight:'bold'}}>{user.name}</Text>
      <Text>{user.email}</Text>
      </View>
      <Text style={{fontWeight:'bold',textAlign:'center'}}>${user.netWorth}</Text>
      </View>
      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      </View> 
  );
}


const styles = StyleSheet.create({
  image:{
    height:245,
    resizeMode:'contain'
  },
  userContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  button:{
    backgroundColor:'deepskyblue',
    width:'40%',
    height:30,
    borderRadius:20,
    alignItems:'center',
    position:'absolute',
    top:700,
    left:125
  }
});

export default ProfileScreen;