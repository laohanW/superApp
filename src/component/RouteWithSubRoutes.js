import React from 'react';
import {Route} from 'react-router-native';
import {
	View
} from 'react-native';
class RouteWithSubRoutes  extends React.Component
{
	constructor(props)
	{
		super(props);
		console.log(this);
	}
	componentWillReceiveProps()
	{
		
	}
	componentWillMount()
	{
		
	}
	render()
	{
		let Component=this.props.component;
		console.log(Component);
		return(
			<Route path={this.props.path} render={props=>(
				<Component {...props} routes={this.props.routes}/>
			)} />	
			
		);
	}
	componentDidMount()
	{
		
	}
	componentWillUnmount()
	{
		
	}
}
export default RouteWithSubRoutes;
