import React, { Component } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { colors } from "../../styles";
import Button from "./../Button";

export class Card extends Component {
	getStyle(style) {
		return [
			style,
			this.props.type === "birthday" && {
				backgroundColor: colors.pink,
				color: colors.white
			},
			this.props.type === "news" &&
				{
					// backgroundColor: colors.lightGreen,
					// color: colors.white
				},
			this.props.type === "calendar" && {
				backgroundColor: colors.lightGreen,
				color: colors.white
			}
		];
	}

	getIconName() {
		if (this.props.type === "birthday") return "birthday-cake";

		if (this.props.type === "event") return "pizza-slice";

		if (this.props.type === "news") return "newspaper";

		if (this.props.type === "calendar") return "calendar";

		if (this.props.type === "GAs") return "people-carry";

		return null;
	}

	getTitleIcon() {
		return (
			<Icon
				size={18}
				name={this.getIconName()}
				style={this.getStyle(styles.icon)}
			/>
		);
	}

	getCardTitle() {
		return (
			<Text style={this.getStyle(styles.cardTitle)}>
				{this.props.title}
			</Text>
		);
	}

	getCardDesc() {
		return this.props.description.map((desc, index) => (
			<Text key={index} style={this.getStyle(styles.cardDescription)}>
				{desc}
			</Text>
		));
	}

	getButton() {
		return (
			<Button style={styles.button}>
				<Text>{this.props.button}</Text>
			</Button>
		);
	}

	render() {
		return (
			<View style={this.getStyle(styles.cardContainer)}>
				<View style={styles.cardTitleContainer}>
					{this.props.type && this.getTitleIcon()}
					{this.props.title && this.getCardTitle()}
				</View>
				{this.props.description && this.getCardDesc()}
				{this.props.button && this.getButton()}
			</View>
		);
	}
}

export default Card;
