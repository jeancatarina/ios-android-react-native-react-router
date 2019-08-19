import React from "react";
import { ScrollView, Text, View } from "react-native";
import News from "../../components/News";
import Header from "../../components/Header";

const Home = (props) => {
	return (
		<ScrollView>
			{/* <Header /> */}
			<News />
		</ScrollView>
	);
};

export default Home;
