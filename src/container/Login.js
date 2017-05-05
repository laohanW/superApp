import React from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginAction from '../action/LoginAction';
class Login  extends React.Component
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
	Login=()=>{
		this.props.loginAction(this.refs.username.value,this.refs.password.value);
	}
	Register=()=>{
		
	}
	render()
	{
		return(
			<View>
				<TextInput ref="username"
					placeholder="username"
				/>
				<TextInput ref='password'
					placeholder="password"
				/>
				<Button onPress={this.Login} title="Login"/>
				<Button onPress={this.Register} title="Register"/>
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
export default connect(
	(state)=>{
		
	},
	(dispatch)=>{
		loginAction:bindActionCreators(LoginAction,dispatch)
	}
)(Login);
