import { StyleSheet } from "react-native";
import { metrics, fonts, colors } from "../../styles";

const styles = StyleSheet.create({
	scrollViewContainer: {
		height: 60,
		backgroundColor: colors.lightBlue
	},
	viewNavigator: {
		flexDirection: "row",
		marginLeft: 20,
		alignItems: "center"
	},
	title: {
		color: colors.white,
		fontSize: 13,
		textAlign: "center"
	},
	icon: {
		color: colors.white,
		textAlign: "center"
	},
	button: {
		backgroundColor: colors.darkBlue,
		height: 50,
		width: 105,
		marginRight: 10,
		borderRadius: 3,
		padding: 10,
		justifyContent: "space-between"
	}
});

export default styles;
