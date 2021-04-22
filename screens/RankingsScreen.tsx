import React from 'react';
import { StyleSheet,View,Text,Image, FlatList } from 'react-native';
import UserRankingItem from '../components/UserRankingItem';


const marketCoins = [{
  id:1,
  name:'Virtual Dollars',
  image:"https://www.kriptoparausdtether.com/wp-content/uploads/2019/04/usdt-tether-1024x576.png",
  netWorth:69420,
},
{
  id:2,
  name:'Bitcoin',
  image:"https://marka-logo.com/wp-content/uploads/2020/08/Bitcoin-Logo.png",
  netWorth:58942,
},
{
  id:3,
  name:'Etherium',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  netWorth:30120
}];

const RankingsScreen = () => {
  return (
      <FlatList 
      data={marketCoins}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item, index}) => <UserRankingItem user={item} place={index+1}/>}
      showsVerticalScrollIndicator={false}
      ListHeaderComponentStyle={{alignItems:'center'}}
      ListHeaderComponent={() =>(
      <>
      <View style={{marginBottom:30}}>
      <Image source={require('../assets/images/Saly-20.png')} style={styles.image}/>
      <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center'}}>Rankings</Text>
      </View>
      </>
      )}
      />
  );
}


const styles = StyleSheet.create({
  image:{
    height:245,
    resizeMode:'contain'
  },
  label:{
    fontWeight:'bold',
    fontSize:18,
    color:'#777777'
  },
  balance:{
    fontSize:36,
    fontWeight:'bold'
  },
  balancecontainer:{
    marginVertical:20,
    width:'100%'
  },
});

export default RankingsScreen;