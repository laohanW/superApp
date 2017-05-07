import React from 'react';
import {Provider} from 'react-redux';
import {
	View,
	StyleSheet
} from 'react-native';
import configureStore from './store/configureStore';
import config from './config';

class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.store=configureStore();
	}
	render()
	{
		let Navigator=config.Navigator;
		return(
			<Provider store={this.store}> 
				<Navigator />
			</Provider>
		);
	}
}
export default App;
