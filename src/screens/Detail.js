import React, { useRef, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground,
	Animated,
	StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icon2 from "@expo/vector-icons/MaterialIcons";
import Icon3 from "@expo/vector-icons/Entypo";
import Colors from "../constants/Colors";
import { PieChart } from "react-native-svg-charts";
import { ScrollView } from "react-native-gesture-handler";
import Storages from "../screens/Storages";

const data = [
	{
		key: 1,
		amount: 80,
		svg: { fill: Colors.colors.light },
	},
	{
		key: 2,
		amount: 20,
		svg: { fill: Colors.colors.yellow },
	},
];
const Detail = (props) => {
	const pan = useRef(new Animated.ValueXY()).current;
	const list = useRef(new Animated.ValueXY()).current;
	useEffect(() => {
		Animated.timing(pan, {
			toValue: { x: -400, y: 0 },
			delay: 1000,
			useNativeDriver: false,
		}).start();
		Animated.timing(list, {
			toValue: { x: 0, y: -300 },
			delay: 2000,
			useNativeDriver: false,
		}).start();
	});
	return (
		<View style={{ flex: 1, backgroundColor: Colors.colors.light }}>
			<ImageBackground
				source={require("../images/bitmap1.png")}
				style={styles.back}
			>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
						<Icon3
							name='chevron-thin-left'
							color={Colors.colors.light}
							size={25}
						/>
					</TouchableOpacity>
					<View style={styles.top}>
						<Image source={require("../images/1.jpeg")} style={styles.av} />
						<View style={styles.ci}></View>
					</View>
				</View>
				<View style={styles.col}>
					<Text style={styles.textStorage}>My Storage</Text>
					<Icon3
						name='sound-mix'
						color='#FFF'
						style={{ marginLeft: 155 }}
						size={16}
					/>
				</View>
				<View style={styles.desc}>
					<PieChart
						style={styles.pie}
						valueAccessor={({ item }) => item.amount}
						data={data}
						spacing={0}
						innerRadius={"80%"}
						outerRadius={"90%"}
					/>
					<View style={{ flex: 1 }}>
						<Text style={styles.textTotal}>Total Used</Text>
						<View style={styles.col1}>
							<Text style={styles.spc}>89.09</Text>
							<Text style={styles.gb}>GB</Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={styles.spc}> / 128</Text>
								<Text style={styles.gb}>GB</Text>
							</View>
						</View>
					</View>
					<View style={{ flex: 1, marginLeft: 110 }}>
						<Text style={styles.items}>689</Text>
						<Text style={styles.label}>Items</Text>
					</View>
				</View>
			</ImageBackground>
			<ScrollView style={{ marginTop: -60 }}>
				<Animated.View style={[pan.getLayout(), styles.card]}>
					<View style={styles.col2}>
						<Icon
							name='folder'
							size={60}
							color={Colors.colors.yellow}
							style={{ flex: 1 }}
						/>
						<View style={styles.col2}>
							<Image
								source={require("../images/1.jpeg")}
								style={styles.friends}
							/>
							<Image
								source={require("../images/3.jpg")}
								style={styles.friends}
							/>
							<Image
								source={require("../images/4.jpg")}
								style={styles.friends}
							/>
						</View>
					</View>

					<View style={styles.col3}>
						<View>
							<Text style={styles.textOrix}>Orix Designers</Text>
							<Text style={styles.duration}>Created: 01.01.2020</Text>
						</View>
						<Icon2
							name='add-circle'
							color={Colors.colors.red}
							size={45}
							style={{ marginLeft: 80 }}
						/>
					</View>
				</Animated.View>
				<Animated.View style={[list.getLayout(), styles.list]}>
					<Storages image={require("../images/on.png")} title={"One Drive"} />
					<Storages
						image={require("../images/go.png")}
						title={"Google Drive"}
					/>
					<Storages image={require("../images/dr.png")} title={"Dropbox"} />
				</Animated.View>
			</ScrollView>
		</View>
	);
};
export default Detail;
const styles = StyleSheet.create({
	list: {
		marginTop: 300,
	},
	back: {
		width: 370,
		height: 380,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 40,
		marginHorizontal: 20,
	},
	top: {
		flexDirection: "row",
		marginLeft: 260,
	},
	av: {
		width: 40,
		height: 40,
		borderRadius: 10,
	},
	ci: {
		backgroundColor: Colors.colors.yellow,
		width: 8,
		height: 8,
		borderRadius: 4,
		marginLeft: -4,
	},
	col: {
		alignItems: "center",
		marginHorizontal: 20,
		flexDirection: "row",
		marginTop: 30,
	},
	textStorage: {
		fontSize: 24,
		color: Colors.colors.light,
		fontFamily: "Montserrat_800ExtraBold",
	},
	desc: {
		flexDirection: "row",
		alignSelf: "center",
		alignItems: "center",
		marginTop: 10,
	},
	pie: {
		height: 100,
		flex: 1,
		marginLeft: 20,
		marginTop: 15,
	},
	textTotal: {
		color: Colors.colors.light,
		fontSize: 18,
		marginLeft: 10,
		width: 100,
		marginTop: 8,
		fontFamily: "Montserrat_600SemiBold",
	},
	col1: {
		flexDirection: "row",
		marginLeft: 10,
	},
	spc: {
		color: Colors.colors.light,
		fontFamily: "Montserrat_600SemiBold",
		fontSize: 18,
	},
	gb: {
		color: Colors.colors.light,
		fontSize: 12,
		marginTop: 6,
		fontFamily: "Montserrat_600SemiBold",
	},
	items: {
		color: Colors.colors.yellow,
		fontFamily: "Montserrat_600SemiBold",
		fontSize: 28,
	},
	label: {
		color: Colors.colors.light,
		fontFamily: "Montserrat_600SemiBold",
		fontSize: 12,
		marginLeft: 15,
	},
	card: {
		backgroundColor: "#FFF",
		elevation: 4,
		height: 150,
		width: 320,
		alignSelf: "center",
		borderRadius: 20,
		marginTop: 20,
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginBottom: 2,
		marginLeft: 800,
	},
	col2: {
		alignItems: "center",
		flexDirection: "row",
	},
	friends: {
		width: 40,
		height: 40,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: "#FFF",
		marginLeft: -10,
	},
	col3: {
		flexDirection: "row",
		marginTop: 10,
	},
	textOrix: {
		fontSize: 20,
		fontFamily: "Montserrat_600SemiBold",
	},
	duration: {
		fontSize: 15,
		color: "#d8d8d8",
		fontFamily: "Montserrat_600SemiBold",
	},
});
