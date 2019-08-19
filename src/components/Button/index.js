import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Button = ({ style, children, onPress }) => (
	<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
		{children}
	</TouchableOpacity>
);

export default Button;
