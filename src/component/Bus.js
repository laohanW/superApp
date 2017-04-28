import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
class Bus extends React.Component
{
	constructor(props)
	{
		super(props);
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
			<View>
				<Text style={styles.subHeader}>Bus</Text>
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
const style=StyleSheet.create({
	subHeader:{
		fontSize:20
	}
});
export default Bus;
