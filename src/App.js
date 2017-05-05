import React from 'react';
import {Provider} from 'react-redux';
import {
	View,
	StyleSheet
} from 'react-native';
import Home from './container/Home';
import Mine from './container/Mine';
import Login from './container/Login';
import {TabNavigator,StackNavigator} from 'react-navigation';
import configureStore from './store/configureStore';

const Stack=StackNavigator(
	{
		Main:{
			screen:TabNavigator(
			{
				Home:
				{
					screen:Home,
					navigationOptions:{
						tabBarLabel:"Home"
					}
				},
				Mine:
				{
					screen:Mine,
					navigationOptions:{
						tabBarLabel:"Mine"
					}
				}
			},
			{
				tabBarPosition:"bottom"
			}),
			navigationOptions:{
				header:null
			}
		},
		Login:{
			screen:Login,
			navigationOptions:{
				title:"Login"
			}
		}
	},
	{
		initialRouteName:"Main",
	}
);
class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.store=configureStore();
	}
	render()
	{
		return(
			<Provider store={this.store}> 
				<Stack />
			</Provider>
		);
	}
}
export default App;
