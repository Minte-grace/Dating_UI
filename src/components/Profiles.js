import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';


const Profile = ({username,uri}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri:uri}} style={styles.avatarStyle}/>
            <Text style={styles.nameStyle}>{username}</Text>
        </View>
    )
}
export default Profile;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginTop:20,
        marginRight:17
    },
    avatarStyle:{
        width:60,
        height:60,
        borderRadius:30
    },
    nameStyle:{
        marginTop:10,
        fontSize:11,
        color:'#fff',
        fontFamily:'Montserrat_700Bold'
    }
})