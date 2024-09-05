import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<Text>Este es el Header</Text>
			</View>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
