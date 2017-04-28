import React from 'react';
import {Route,Link} from 'react-router-native';
import Sandwiches from './Sandwiches';
import Tacos from './Tacos';
import Bus from '../component/Bus';
import RouteWithSubRoutes from '../component/RouteWithSubRoutes';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
const routes=[
	{
		path:"/sandwiches",
		component:Sandwiches
	},
	{
		path:"/tacos",
		component:Tacos,
		routes:[
			{
				path:"/tacos/bus",
				component:Bus
			}
		]
	}
];

class Home  extends React.Component
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
			<View style={styles.container}>
				<View style={styles.nav}>
					<Link
						to="/tacos"
						style={styles.navItem}
						underlayColor="#f0f4f7"	
					>
						<Text>Tacos</Text>
					</Link>
					<Link
						to="/sandwiches"
						style={styles.navItem}
						underlayColor="#f0f4f7"	
					>
						<Text>Sandwiches</Text>
					</Link>
				</View>
				{routes.map((route,i)=>(
					<RouteWithSubRoutes key={i} {...route} />
				))}
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
	container:{
		marginTop:25,
		padding:10
	},
	nav:{
		flexDirection:'row',
		justifyContent:"space-around"
	},
	navItem:{
		flex:1,
		alignItems:'center',
		padding:10
	},
	subHeader:{
		fontSize:15
	}
});

export default Home;
