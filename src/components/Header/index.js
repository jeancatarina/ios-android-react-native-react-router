import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text } from "react-native";
import { colors, fonts } from "../../styles";

const Header = () => (
	<View
		style={{
			justifyContent: "center",
			flexDirection: "column",
			height: 80,
			backgroundColor: colors.darker
		}}
	>
		<Icon
			size={24}
			name={"church"}
			style={{ textAlign: "center", color: colors.white }}
		/>
		<Text
			style={{
				fontFamily: fonts.family.thin,
				fontSize: fonts.size.bigger,
				color: colors.white,
				textAlign: "center"
			}}
		>
			Cena Jovem
		</Text>
	</View>
);

export default Header;
