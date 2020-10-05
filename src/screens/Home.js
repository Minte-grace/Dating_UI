import React, { useEffect, useRef } from "react";
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	ImageBackground,
	Animated,
	StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";
import Icon from "@expo/vector-icons/Ionicons";
import Icon2 from "@expo/vector-icons/Fontisto";
import Icon3 from "@expo/vector-icons/Entypo";
import { PieChart } from "react-native-svg-charts";

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

const Home = (props) => {
	const pan = useRef(new Animated.ValueXY()).current;
	useEffect(() => {
		Animated.timing(pan, {
			toValue: { x: 800, y: 0 },
			delay: 1000,
			useNativeDriver: false,
		}).start();
	});

	return (
		<View style={styles.page}>
			<ImageBackground
				source={require("../images/bitmap.png")}
				style={styles.bi}
			>
				<View style={styles.headerContainer}>
					<View style={{ flex: 5 }}>
						<Icon2 name='minus-a' color={Colors.colors.light} size={25} />
						<Icon
							name='ios-remove'
							color={Colors.colors.light}
							size={32}
							style={styles.ico}
						/>
					</View>
					<View style={{ flexDirection: "row" }}>
						<Image source={require("../images/2.jpg")} style={styles.av} />
						<View style={styles.dot}></View>
					</View>
				</View>
				<View style={styles.topText}>
					<Text style={styles.textFile}>File</Text>
					<Icon3 color='#FFF' size={24} name='dots-two-horizontal' />
				</View>
				<Text style={styles.textManager}>Manager</Text>
				<View style={styles.topText}>
					<Text style={styles.le}>Let's clean and </Text>
					<Text style={styles.ri}>manage your file's</Text>
				</View>
				<View style={styles.sideTab}>
					<View style={{ marginLeft: -20 }}>
						<Text style={styles.tab1}>External storage</Text>
						<Text style={styles.tab2}>Internal storage</Text>
					</View>
					<Animated.View style={[pan.getLayout()]}>
						<View style={styles.card}>
							<View style={styles.top}>
								<Text style={styles.textTop}>Your Storage</Text>
								<Icon3
									name='sound-mix'
									color='#FFF'
									style={{ marginLeft: 50 }}
									size={16}
								/>
							</View>
							<View>
								<View style={styles.center}>
									<View style={styles.col}>
										<Text style={styles.space}>128</Text>
										<Text style={styles.gb}>GB</Text>
									</View>

									<Text style={styles.per}>70% USED</Text>
								</View>
								<PieChart
									style={styles.pie}
									valueAccessor={({ item }) => item.amount}
									data={data}
									spacing={0}
									innerRadius={"60%"}
									outerRadius={"90%"}
								/>
								<View style={styles.labelContainer}>
									<View
										style={{
											...styles.circle,
											backgroundColor: Colors.colors.light,
										}}
									></View>
									<Text style={styles.textUsed}>Used</Text>
									<View
										style={{
											...styles.circle,
											backgroundColor: Colors.colors.yellow,
										}}
									></View>
									<Text style={styles.textFree}>Free</Text>
								</View>
							</View>
							<TouchableOpacity
								onPress={() => props.navigation.navigate("Detail")}
								style={styles.btn}
							>
								<Text style={styles.textStorage}>Storage</Text>
							</TouchableOpacity>

							<View style={styles.shadow}></View>
						</View>
					</Animated.View>
				</View>
			</ImageBackground>
		</View>
	);
};
export default Home;

const styles = StyleSheet.create({
	page: {
		backgroundColor: Colors.colors.light,
		flex: 1,
	},
	bi: {
		width: 368,
		height: 640,
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 40,
		marginHorizontal: 20,
	},
	shadow: {
		backgroundColor: Colors.colors.red,
		height: 320,
		width: 30,
		marginLeft: 195,
		opacity: 0.5,
		marginTop: 20,
		borderRadius: 20,
		position: "absolute",
	},
	textStorage: {
		color: Colors.colors.light,
		fontSize: 10,
		fontFamily: "Montserrat_600SemiBold",
	},
	btn: {
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
		backgroundColor: Colors.colors.blue,
		paddingVertical: 10,
		paddingHorizontal: 25,
		borderRadius: 25,
		borderWidth: 3,
		borderColor: "#f04946",
	},
	textFree: {
		color: Colors.colors.yellow,
		fontFamily: "Montserrat_600SemiBold",
	},
	circle: {
		width: 10,
		height: 10,
		borderRadius: 10,
		marginHorizontal: 10,
	},
	textUsed: {
		color: Colors.colors.light,
		fontFamily: "Montserrat_600SemiBold",
	},
	labelContainer: {
		flexDirection: "row",
		alignSelf: "center",
		alignItems: "center",
		marginTop: 20,
	},
	av: {
		width: 40,
		height: 40,
		borderRadius: 10,
	},
	dot: {
		backgroundColor: Colors.colors.yellow,
		width: 8,
		height: 8,
		borderRadius: 4,
		marginLeft: -4,
	},
	topText: {
		alignItems: "center",
		marginHorizontal: 20,
		flexDirection: "row",
		marginTop: 40,
	},
	textFile: {
		fontSize: 34,
		color: Colors.colors.light,
		flex: 1,
		fontFamily: "Montserrat_700Bold",
	},
	textManager: {
		fontSize: 28,
		color: Colors.colors.light,
		fontWeight: "400",
		marginHorizontal: 20,
		fontFamily: "Montserrat_700Bold",
	},
	topText: {
		flexDirection: "row",
		marginHorizontal: 20,
		marginTop: 10,
	},
	le: {
		color: Colors.colors.light,
		fontFamily: "Montserrat_600SemiBold",
	},
	ico: {
		marginTop: -20,
		marginHorizontal: 1.5,
	},
	ri: {
		color: Colors.colors.yellow,
		fontFamily: "Montserrat_600SemiBold",
	},
	sideTab: {
		flexDirection: "row",
		marginHorizontal: -15,
		marginTop: 40,
	},
	tab1: {
		color: Colors.colors.yellow,
		transform: [{ rotate: "-90deg" }],
		marginTop: 60,
		fontFamily: "Montserrat_600SemiBold",
	},
	tab2: {
		color: Colors.colors.light,
		transform: [{ rotate: "-90deg" }],
		marginTop: 120,
		fontFamily: "Montserrat_600SemiBold",
	},
	card: {
		backgroundColor: Colors.colors.red,
		height: 370,
		width: 210,
		borderRadius: 20,
		marginLeft: -800,
	},
	top: {
		padding: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	textTop: {
		color: "#FFF",
		fontSize: 16,
		opacity: 1,
		fontFamily: "Montserrat_600SemiBold",
	},
	per: {
		color: "#FFF",
		fontFamily: "Montserrat_600SemiBold",
	},
	pie: {
		height: 150,
		marginTop: 15,
	},
	gb: {
		marginTop: 5,
		color: "#FFF",
		fontFamily: "Montserrat_600SemiBold",
	},
	space: {
		color: "#FFF",
		fontSize: 24,
		fontFamily: "Montserrat_600SemiBold",
	},
	center: {
		position: "absolute",
		alignSelf: "center",
		marginTop: 60,
		alignItems: "center",
	},
	col: {
		flexDirection: "row",
		alignItems: "center",
	},
});
