import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Card from "./../Card";
import styles from "./styles";

export class News extends Component {
	state = {
		cards: [
			{
				title: "Eventos",
				description: [
					"22 Out - Hangout Retiro",
					"12 Dez - Vigicamp",
					"12 Jan - Meeting",
				],
				type: "event"
			},
			{
				title: "Aniversariantes",
				description: ["11 Out - João", "26 Out - Jean Catarina"],
				type: "birthday"
			},
			{
				title: "Recados",
				description: [
					"Não esqueçam de pagar o workshop até TERÇA-FEIRA, é muito importante que não percam essa data"
				],
				type: "news"
			},
			{
				title: "GAs",
				description: [
					"Você está a 15 dias sem participar dos GAS",
				],
				button: "Falar com seu pastor",
				type: "GAs"
			},
			{
				title: "Calendário do Mês",
				description: [
					"15 - Vigília",
					"08 - Pelas Ruas",
					"12 - Comunidade",
					"20 - Pelas Ruas",
					"25 - Culto de Natal",
					"30 - Vigília"
				],
				type: "calendar"
			}
		]
	};

	createMenuButtons({ title, description, type, button }, index) {
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

	render() {
		const { cards } = this.state;

		return (
			<View style={styles.container}>
				{cards && cards.map(this.createMenuButtons)}
			</View>
		);
	}
}

export default News;
