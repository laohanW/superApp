import sqlite from '../core/sqlite';
console.log('test');
console.log(sqlite);
import React from 'react';
import {View} from 'react-native';
class Test extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	shouldComponentUpdate(dataProps,dataState)
	{
		
	}
	componentWillReceiveProps()
	{
		
	}
	componentWillMount()
	{
		
	}
	render()
	{
		console.log("render");
		console.log(sqlite);
		return(
			<View>
				
			</View>		
		);
	}
	componentDidMount()
	{
		
	}
	componentWillUnmount()
	{
		
	}
}
export default Test;
