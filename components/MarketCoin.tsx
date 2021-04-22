import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

export interface MarketCoinProps {
    marketCoin:{
        image: string,
        name: string,
        symbol: string,
        valueChange24H: number,
        valueUSD: number,
    }
};

const MarketCoin = (props :MarketCoinProps) => {
    const {
        marketCoin:{
            image,name,symbol,valueChange24H,valueUSD,
        }
        } = props;
        
    return (
        <View style={styles.container}>
            <Image source={{uri:image}} style={styles.image} />
            <View style={{flexDirection:'column' , alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>{name}</Text>
            <Text>{symbol}</Text>
            </View>
            <View style={{flexDirection:'column',alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>${valueUSD}</Text>
            <Text style={{color:valueChange24H > 0 ? '#4bdb00':'#f10000'}}>{valueChange24H > 0 && '+'}{valueChange24H}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    image:{
        width:'30%',
        height:75,
        borderRadius:25
    }
})


export default MarketCoin;
