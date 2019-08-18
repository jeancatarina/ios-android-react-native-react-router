import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Button = ({ style, children }) => (
	<TouchableOpacity style={[styles.container, style]} onPress={() => {}}>
		{children}
	</TouchableOpacity>
);

export default Button;
