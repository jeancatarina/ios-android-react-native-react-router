import {
	createBottomTabNavigator,
	createAppContainer,
	createStackNavigator
} from "react-navigation";
import Ga from "./pages/Ga";
import Home from "./pages/Home";
import Tabs from "./components/Tabs";

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: Home
		},
		Ga: {
			screen: Ga
		}
	},
	{
		initialRouteName: "Home"
	}
);

const TabNavigator = createBottomTabNavigator(
	{
		Home: Home,
		Ga: Ga
	},
	{ tabBarComponent: Tabs }
);

export default createAppContainer(TabNavigator);
