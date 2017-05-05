import React from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet
} from 'react-native';
class Mine  extends React.Component
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
	OnLogin=()=>{
		this.props.navigation.navigate('Login');
	}
	render()
	{
		return(
			<View>
				<Text>Mine</Text>
				<Button onPress={this.OnLogin} title="go to login" />
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
const styles=StyleSheet.create({
	subHeader:{
		fontSize:20
	}
});
export default Mine;
