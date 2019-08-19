import React from "react";
import { View } from "react-native";
import Routes from './routes';
import { colors } from "./styles";

const App = (props) => {
	return (
		<View style={{ flex: 1, backgroundColor: colors.white }}>
			<Routes />
		</View>
	);
};

export default App;
