import React from 'react';
import { StyleSheet,View,Text,Image, FlatList } from 'react-native';
import PortfolioCoin from '../components/PortfolioCoin';


const portfolioCoins = [{
  id:1,
  name:'Virtual Dollars',
  symbol:'USD',
  image:"https://www.kriptoparausdtether.com/wp-content/uploads/2019/04/usdt-tether-1024x576.png",
  amount:69.420,
  valueUSD:69.420,
},
{
  id:2,
  name:'Bitcoin',
  symbol:'BTC',
  image:"https://marka-logo.com/wp-content/uploads/2020/08/Bitcoin-Logo.png",
  amount:1.12,
  valueUSD:59.420,
},
{
  id:3,
  name:'Etherium',
  symbol:'ETH',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  amount:30,
  valueUSD:30.120,
},
{
  id:4,
  name:'Etherium',
  symbol:'ETH',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  amount:30,
  valueUSD:30.120,
},
{
  id:5,
  name:'Etherium',
  symbol:'ETH',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  amount:30,
  valueUSD:30.120,
},
{
  id:6,
  name:'Etherium',
  symbol:'ETH',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  amount:30,
  valueUSD:30.120,
},
{
  id:7,
  name:'Etherium',
  symbol:'ETH',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  amount:30,
  valueUSD:30.120,
},
{
  id:8,
  name:'Etherium',
  symbol:'ETH',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  amount:30,
  valueUSD:30.120,
},
{
  id:9,
  name:'Etherium',
  symbol:'ETH',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  amount:30,
  valueUSD:30.120,
},
{
  id:10,
  name:'Etherium',
  symbol:'ETH',
  image:"https://marka-logo.com/wp-content/uploads/2020/12/Ethereum-Logo.png",
  amount:30,
  valueUSD:30.120,
},];


const PortfolioScreen = () => {
  return (
      <FlatList 
      data={portfolioCoins}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item}) => <PortfolioCoin portfolioCoin={item}/>}
      showsVerticalScrollIndicator={false}
      ListHeaderComponentStyle={{alignItems:'center'}}
      ListHeaderComponent={() =>(
      <>
      <Image source={require('../assets/images/Saly-10.png')} style={styles.image}/>
      <View style={styles.balancecontainer}>
      <Text style={styles.label}>Portfolio Balance</Text>
      <Text style={styles.balance}>$169.420</Text>
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

export default PortfolioScreen;