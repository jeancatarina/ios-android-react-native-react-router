import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import News from "./pages/News";

const AppNavigator = createStackNavigator({
	Home: {
		screen: News
	}
});

export default createAppContainer(AppNavigator);
