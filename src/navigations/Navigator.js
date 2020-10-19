import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Discussion from '../screens/Discussion';
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import Icon from '@expo/vector-icons/Ionicons';
import Icon2 from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor:'#f2404c',
                inactiveTintColor:'#000119',
                style:{
                    height:65,
                    justifyContent:'center',
                    paddingVertical:15,
                    backgroundColor:'#FFF',
                    elevation:2
                }
            }}
        >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color,size})=>(
                            <Icon name='ios-compass' color={color} size={30}/>
                        )
                    }}
                />
                 <Tab.Screen
                    name='Chat'
                    component={Chat}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color,size})=>(
                            <Icon2 name='chat' color={color} size={30}/>
                        )
                    }}
                />
                 <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarLabel:'',
                        tabBarIcon:({color,size})=>(
                            <Icon name='ios-person' color={color} size={30}/>
                        )
                    }}
                />
        </Tab.Navigator>
    );
};
const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
};

const ChatStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Chat' component={BottomTabNavigator}/>
            <Stack.Screen name='Discussion' component={Discussion}/>
        </Stack.Navigator>
    )
}

export default ChatStackNavigator;