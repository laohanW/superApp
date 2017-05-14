import React from 'react';
import {Provider} from 'react-redux';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import sqlite from './core/sqlite';
import configureStore from './store/configureStore';
import config from './config';
class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.store=configureStore();
		this.state={
			sqliteOpened:false
		}
		sqlite.connect(config.database,()=>{
			this.setState({
				sqliteOpened:true
			});
		},()=>{
		
		});
	}
	componentWillMount()
	{
	}
	componentWillUnmount()
	{
		sqlite.close();
	}
	render()
	{
		let Navigator=config.Navigator;
		if (this.state.sqliteOpened)
		{
			return(
				<Provider store={this.store}> 
					<Navigator />
				</Provider>
			);
		}
		else{
			return (
				<View>
					<Text>Sqlite initialing$</Text>
				</View>
			);
		}
	}
}
export default App;
