import React from 'react';
import {Provider} from 'react-redux';
import {NativeRouter} from 'react-router-native';
import {
	View,
	StyleSheet
} from 'react-native';
import Home from './container/Home';
import configureStore from './store/configureStore';
class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.store=configureStore();
	}
	componentWillReceiveProps()
	{
		
	}
	componentWillMount()
	{
		
	}
	render()
	{
		return(
			<Provider store={this.store}>
				<View>
					<NativeRouter>
						<Home />
					</NativeRouter>
				</View>
			</Provider>
		);
	}
	componentDidMount()
	{
		
	}
	componentWillUnmount()
	{
		
	}
}
export default App;
