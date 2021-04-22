import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'

export interface PortfolioCoinProps {
    portfolioCoin:{
        image: string,
        name: string,
        symbol: string,
        amount: number,
        valueUSD: number,
    }
}

const PortfolioCoin = (props :PortfolioCoinProps) => {
    const {
        portfolioCoin:{
            image,name,symbol,amount,valueUSD,
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
            <Text>{symbol} {amount}</Text>
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


export default PortfolioCoin;
