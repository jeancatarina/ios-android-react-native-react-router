import { StyleSheet } from "react-native";
import { metrics, fonts, colors } from "../../styles";

const styles = StyleSheet.create({
	icon: {
		color: colors.darker,
		marginRight: 5
	},
	cardTitleContainer: {
		flexDirection: "row"
	},
	cardTitle: {
		fontSize: fonts.size.big,
		fontWeight: "bold",
		marginBottom: 5,
		color: colors.darker
	},
	cardDescription: {
		fontSize: fonts.size.regular,
		fontFamily: fonts.family.thin,
		color: colors.darker
	},
	cardContainer: {
		marginHorizontal: 20,
		marginVertical: 10,
		padding: 20,
		minHeight: 100,
		backgroundColor: colors.white,
		borderRadius: 5,
		elevation: 2,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: colors.lighter,
		shadowOpacity: 0.5,
		shadowRadius: 1
	},
	button: {
		backgroundColor: colors.light,
		height: 20,
		borderRadius: 3,
		marginTop: 5,
		alignItems: "center"
	}
});

export default styles;
