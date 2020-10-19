import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const randomTime = () => {
    const hrs = Math.round(Math.random()*12);
    const mins = Math.round(Math.random()*60);
    const hFormat = hrs < 10 ? '0' : '';
    const mFormat = mins < 10 ? '0' : '';
    const amPm = hrs < 12 ? 'AM' : 'PM';
    return String(hFormat + hrs + ":"+ mFormat + mins + " " + amPm)
}

const Messages = ({ username, uri, count, onPress }) => {
    return(
       <TouchableOpacity 
        onPress={onPress}
        style={styles.container}
       >
           {
               count > 0 ? (
                   <LinearGradient
                    colors={['#f26a50', '#f20045', '#f20045']}
                    style={styles.gradientStyle}
                   >
                       <Text style={styles.count}>{count}</Text>
                   </LinearGradient>
               ):
               
                null
           }
               
               <Image source={{uri: uri}} style={styles.image}/>
               <View style={{marginLeft:10}}>
                 <Text style={styles.username}>{username}</Text>
                 <Text style={styles.text}>Hello, How are you</Text>
               </View>
               <Text style={styles.duration}>{randomTime()}</Text>
       </TouchableOpacity>
    )
}
export default Messages;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        marginTop:30
    },
    gradientStyle:{
       height:20,
       width:20,
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',
       marginRight:20 
    },
    count:{
        color:'#fff',
        fontFamily:'Montserrat_700Bold',
    },
    image:{
        width:60,
        height:60,
        borderRadius:30
    },
    text:{
        color:'#b6b6b6',
        fontFamily:'Montserrat_600SemiBold',
        fontSize:11
    },
    duration:{
        color:'#000119',
        fontSize:12,
        flex:1,
        marginLeft:280,
        position:'absolute',
        fontFamily:'Montserrat_600SemiBold'
    },
    username:{
        color:'#000119',
        fontFamily:'Montserrat_700Bold'
    }
})
