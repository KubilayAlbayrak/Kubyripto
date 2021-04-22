import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

export interface UserRankingItemProps {
    user:{
        name:string,
        image:string,
        netWorth:number,
    },
    place:number
};

const UserRankingItem = (props :UserRankingItemProps) => {
    const {
        user:{
            name,image,netWorth
        },
        place
        } = props;
        
    return (
        <View style={styles.container}>
            <Text>{place}</Text>
            <Image source={{uri:image}} style={styles.image} />
            <View style={{flexDirection:'column' , alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>{name}</Text>
            </View>
            <View style={{flexDirection:'column',alignItems:'center'}}>
            <Text>${netWorth}</Text>
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


export default UserRankingItem;
