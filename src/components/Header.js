import React from 'react';
import {View,Text} from 'react-native';

const Header = () => {
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>Header Component</Text>
        </View>
    )
}
export default Header;