import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import Button from "./../Button";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

export class Tabs extends Component {
	state = {
		menuItems: [
			{ title: "Novidades", icon: "coffee" },
			{ title: "GAs", icon: "child" },
			{ title: "Calendário", icon: "calendar" },
			{ title: "Arquivos", icon: "file-word-o" },
			{ title: "Recados", icon: "newspaper-o" },
			{ title: "Estatísticas", icon: "line-chart" },
			{ title: "Configurações", icon: "cog" }
		]
	};

	createMenuButtons({ title, icon }, index) {
		return (
			<Button style={styles.button} key={`${title}-${index}`}>
				<Icon size={18} name={icon} style={styles.icon} />
				<Text style={styles.title}>{title}</Text>
			</Button>
		);
	}

	render() {
		const { menuItems } = this.state;

		return (
			<View>
				<ScrollView
					style={styles.scrollViewContainer}
					horizontal
					showsHorizontalScrollIndicator={false}
				>
					<View style={styles.viewNavigator}>
						{menuItems.map(this.createMenuButtons)}
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default Tabs;
