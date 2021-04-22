import React from 'react';
import { StyleSheet,View,Text,Image, FlatList } from 'react-native';
import MarketCoin from '../components/MarketCoin';


const marketCoins = [{
  id:1,
  name:'Virtual Dollars',
  symbol:'USD',
  image:"https://www.kriptoparausdtether.com/wp-content/uploads/2019/04/usdt-tether-1024x576.png",
  valueChange24H:2.24,
  valueUSD:69.420,
},
{
  id:2,
  name:'Bitcoin',
  symbol:'BTC',
  image:"https://marka-logo.com/wp-content/uploads/2020/08/Bitcoin-Logo.png",
  valueChange24H:-1.12,
  valueUSD:59.420,
},
{
  id:3,
  name:'Etherium',
  symbol:'ETH',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  valueChange24H:3.54,
  valueUSD:30.120,
}];

const MarketScreen = () => {
  return (
      <FlatList 
      data={marketCoins}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item}) => <MarketCoin marketCoin={item}/>}
      showsVerticalScrollIndicator={false}
      ListHeaderComponentStyle={{alignItems:'center'}}
      ListHeaderComponent={() =>(
      <>
      <View style={{marginBottom:30}}>
      <Image source={require('../assets/images/Saly-17.png')} style={styles.image}/>
      <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center'}}>Market</Text>
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

export default MarketScreen;