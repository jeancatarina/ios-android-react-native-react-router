import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import Button from "./../Button";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

export class Tabs extends Component {
	state = {
		menuItems: [
			{ title: "Novidades", icon: "coffee", screenName: "Home"},
			{ title: "GAs", icon: "child", screenName: "Ga"},
			{ title: "Calendário", icon: "calendar", screenName: ""},
			{ title: "Arquivos", icon: "file-word-o", screenName: ""},
			{ title: "Recados", icon: "newspaper-o", screenName: ""},
			{ title: "Estatísticas", icon: "line-chart", screenName: ""},
			{ title: "Configurações", icon: "cog", screenName: ""}
		]
	};

	createMenuButtons({ title, icon, screenName }, index) {
		return (
			<Button
				style={styles.button}
				onPress={() => this.props.navigation.navigate(screenName)}
				key={`${title}-${index}`}
			>
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
						{menuItems.map(this.createMenuButtons.bind(this))}
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default Tabs;
