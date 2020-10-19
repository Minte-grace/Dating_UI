import React,{useState} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import LastWatch from '../components/LastWatch';
import Received from '../components/Received';
import Sent from '../components/Sent';
import Data from '../dummy/Data.json';
import Input from '../components/Input'; 

const Discussion = ({ route, navigation }) => {
    const { itemName , itemPic } = route.params;
    const [inputMessage, setMessage] = useState('');
    
    const send = () => {
        Data.push({id:inputMessage,message:inputMessage});
        setMessage('');
    };

    var txt = []
    for (var i = 5; i < Data.length; i++){
        txt.push(<Sent key={Data[i].id} message={Data[i].message}/>);
    }
    console.log(Data)

    return(
      <LinearGradient
        colors={["#f26a50","#f26a50", "#f20045"]}
        style={styles.container}
      >
          <View style={styles.main}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                    >
                        <Icon name='left' color='#000119' size={24}/>
                    </TouchableOpacity>
                    <Text style={styles.username}>{itemName}</Text>
                    <Image source={{uri:itemPic}} style={styles.avatar}/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <LastWatch  checkedOn='Yesterday'/>
                    <Received 
                        image={itemPic}
                        message={Data[0].message}
                    />
                    <Sent
                        message={Data[1].message}
                    />
                    <Received 
                        image={itemPic}
                        message={Data[2].message}
                    />
                     <Sent
                        message={Data[3].message}
                    />
                    <LastWatch  checkedOn='Today'/>
                    <Received 
                        image={itemPic}
                        message={Data[4].message}
                    />
                    <View>
                        {txt}
                    </View>
                </ScrollView>
          </View>
          <Input
            inputMessage={inputMessage}
            setMessage={(inputMessage)=> setMessage(inputMessage)}
            onSendPress={send}
          />
      </LinearGradient>
    )
}
export default Discussion;

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:"100%"
    },
    main:{
        backgroundColor:'#FFF',
        height:'88%',
        paddingHorizontal:20,
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        paddingTop:40
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    username:{
        color:"#000119",
        fontFamily:'Montserrat_700Bold',
        fontSize:20,
        flex:1,
        textAlign:'center'
    },
    avatar:{
        width:40,
        height:40,
        borderRadius:20,
    }

})