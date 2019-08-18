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

	getTitleIcon() {
		if (this.props.type === "birthday") return "birthday-cake";

		if (this.props.type === "event") return "pizza-slice";

		if (this.props.type === "news") return "newspaper";

		if (this.props.type === "calendar") return "calendar";

		if (this.props.type === "GAs") return "people-carry";

		return null;
	}

	getButton() {
		return (
			<Button style={styles.button}>
				<Text>{this.props.button}</Text>
			</Button>
		);
	}

	render() {
		let titleIcon;

		titleIcon = this.getTitleIcon();

		return (
			<View style={this.getStyle(styles.cardContainer)}>
				<View style={styles.cardTitleContainer}>
					<Icon
						size={18}
						name={titleIcon}
						style={this.getStyle(styles.icon)}
					/>
					<Text style={this.getStyle(styles.cardTitle)}>
						{this.props.title}
					</Text>
				</View>
				{this.props.description.map((desc, index) => (
					<Text
						key={index}
						style={this.getStyle(styles.cardDescription)}
					>
						{desc}
					</Text>
				))}
				{this.props.button && this.getButton()}
			</View>
		);
	}
}

export default Card;
