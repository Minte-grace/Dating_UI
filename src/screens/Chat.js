import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from '@expo/vector-icons/Entypo';
import Icon from "@expo/vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";
import Profiles from "../components/Profiles";
import Messages from '../components/Messages';

const Chat = () => {
	const URL = `https://api.github.com/users`;
	const [data, setData] = useState([]);

	useEffect(function () {
		const getData = async () => {
			const resp = await fetch(URL);
			const data = await resp.json();

			setData(data);
		};
		getData();
	}, []);
	console.log(data.login);
	return (
		<LinearGradient
			// Background Linear Gradient
			colors={["#f26a50", "#f20042", "#f20045"]}
			style={{
				position: "absolute",
				left: 0,
				right: 0,
				top: 0,
				height: "100%",
				paddingHorizontal: 20,
				paddingTop: 30,
			}}
		>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Text
					style={{
						fontFamily: "Montserrat_800ExtraBold",
						color: "#fff",
						flex: 1,
						fontSize: 24,
					}}
				>
					Chat
				</Text>
				<Icon name='add' color='#FFF' size={30} />
			</View>

            <ScrollView 
            style={{marginRight:-20,}}
            horizontal
             showsHorizontalScrollIndicator={false}>
				{data.map((item, index) => (
					<Profiles key={item.id} username={item.login} uri={item.avatar_url} />
				))}
			</ScrollView>
            <View
                style={{
                    borderTopLeftRadius:40,
                    borderTopRightRadius:40,
                    height:500,
                    backgroundColor:'#FFF',
                    marginHorizontal:-20
                }}
            >
                <View style={{ flexDirection: "row", marginTop:25, marginHorizontal:20, alignItems: "center" }}>
				<Text
					style={{
						fontFamily: "Montserrat_800ExtraBold",
						color:'#000119',
						flex: 1,
						fontSize: 20,
					}}
				>
					Sunday
				</Text>
				<Entypo name='dots-three-horizontal' color='#000119' size={30} />
			</View>
            <ScrollView>
            {data.map((item, index) => (
                    <Messages
                        key={item.id}
                        username={item.login}
                        uri={item.avatar_url} 
                        count={Math.floor(Math.random() * 3)}

                    />
				))}
            </ScrollView>
           
            </View>
		</LinearGradient>
	);
};
export default Chat;
