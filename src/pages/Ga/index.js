import React, { Component } from "react";
import { View, Text } from "react-native";
import Card from "./../../components/Card";
import styles from "./styles";

export class Ga extends Component {
	state = {
		location: {
			Guanabara: {
				cards: [
					{
						title: "GA Burn - Jean e Jonatas",
						description: [
							"12 membros",
							"8 membros ativos no último mês",
							"Rua floresta, 251"
						]
					},
					{
						title: "GA Lucas e Matos",
						description: [
							"12 membros",
							"8 membros ativos no último mês",
							"Rua floresta, 251"
						]
					}
				]
			},
			Atiradores: {
				cards: [
					{
						title: "GA Felipe e Romulo",
						description: [
							"12 membros",
							"8 membros ativos no último mês",
							"Rua floresta, 251"
						]
					}
				]
			}
		}
	};

	getCard({ title, description, type, button }, index) {
		return (
			<Card
				key={`${title}-${index}`}
				title={title}
				description={description}
				type={type}
				button={button}
			/>
		);
	}

	getHeaderTitle() {
		return (
			<Text style={styles.title}>Encontre um GA perto de sua casa</Text>
		);
	}

	render() {
		const { location } = this.state;

		return (
			<View>
				{this.getHeaderTitle()}
				{Object.keys(location).map((district, index) => (
					<View key={index}>
						<Text key={index}>{district}</Text>
						{location[district].cards.map(this.getCard)}
					</View>
				))}
			</View>
		);
	}
}

export default Ga;
