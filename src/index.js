import React from "react";
import { View } from "react-native";
import Tabs from "./components/Tabs";
import Routes from './routes';
import { colors } from "./styles";

const App = () => {
	return (
		<View style={{ flex: 1, backgroundColor: colors.white }}>
			<Routes />
			<Tabs />
		</View>
	);
};

export default App;
