import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import {Link} from 'react-router-native';
class Tacos  extends React.Component
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
		return(
			<View>
				<Text style={styles.header}>Tacos</Text>
				<View style={styles.nav}>
					<Link 
						to="/tacos/bus" 
						style={styles.navItem}
						underlayColor="#f0f5f7"
						>
						<Text>Bus</Text>
					</Link>
					<Link 
						to="/tacos/Cart" 
						style={styles.navItem}
						underlayColor="#f0f5f7"
						>
						<Text>Cart</Text>
					</Link>
				</View>
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
	header:{
		fontSize:20
	}	,
	navItem:{
		flex:1,
		alignItems:'center',
		padding:10
	},
	nav:{
		flexDirection:"row",
		justifyContent:"space-around"
	}
});
export default Tacos;
