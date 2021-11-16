import React,{useState} from 'react';
import {View,Text,Image,StyleSheet, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from '@expo/vector-icons/AntDesign';
import LastWatch from '../components/LastWatch';
import Received from '../components/Received';
import Sent from '../components/Sent';
import Data from '../dummy/Data.json';
import Input from '../components/Input';
import {SIZES} from "../consts/theme";

const Discussion = ({ route, navigation }) => {
    const { itemName , itemPic } = route.params;
    const [inputMessage, setMessage] = useState('');

    let scrollViewRef = null
    
    const send = () => {
        Data.push({id:inputMessage,message:inputMessage});
        setMessage('');
        if(scrollViewRef !== null){

        }
    };

    const txt = [];
    for (let i = 5; i < Data.length; i++){
        txt.push(<Sent key={i} message={Data[i].message}/>);
    }

    return(
        <KeyboardAwareScrollView style={{flex: 1}}>
            <LinearGradient
                colors={["#f26a50","#f26a50", "#f20045"]} style={{height: SIZES.height}} >
                <SafeAreaView style={styles.container}>
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
                        <ScrollView ref={ref => {scrollViewRef = ref}}
                                    onContentSizeChange={() => scrollViewRef.scrollToEnd({animated: true})}
                                    showsVerticalScrollIndicator={false}>
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
                </SafeAreaView>
            </LinearGradient>
        </KeyboardAwareScrollView>

    )
}
export default Discussion;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom: 30
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