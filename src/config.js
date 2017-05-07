
import {TabNavigator,StackNavigator} from 'react-navigation';
const config={
	Navigator:StackNavigator(
	{
		Main:{
			screen:TabNavigator(
			{
				Home:
				{
					screen:require('./container/Home').default,
					navigationOptions:{
						tabBarLabel:"Home"
					}
				},
				Mine:
				{
					screen:require('./container/Mine').default,
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
			screen:require('./container/Login').default,
			navigationOptions:{
				title:"Login"
			}
		}
	},
	{
		initialRouteName:"Main",
	})

};
export default config;
