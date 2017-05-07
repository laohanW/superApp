//{{{ import
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar
} from 'react-native';
import {RefreshListView} from '../component';
//}}}

//{{{ component

//}}}


//{{{ Render
class Home  extends React.Component
{
	//{{{ ctor
	constructor(props)
	{
		super(props);
		let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		this.state={
			discounts:[],
			dataSource:ds.cloneWithRows([])
		};
		this.renderHeader=this.renderHeader.bind(this);
		this.requestData=this.requestData.bind(this);
	}
	//}}}

	//{{{ private methods
	renderHeader()
	{
		return(
			<View>
				
			</View>
		);
	}
	requestData()
	{
	}
	//}}}
	
	//{{{ native component
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
				<RefreshListView
					ref='listView'
					dataSource={this.state.dataSource}
					renderHeader={()=>this.renderHeader()}
					renderRow={(rowData)=>
						<GroupPurchaseCell
							info={rowData}
							onPress={()=>{
								StatusBar.setBarStyle('default',false);
								//this.props.navigation.navigate('GroupPurchase',{info:rowData});
							}}
						/>
					}
					onHeaderRefresh={()=>this.requestData()}
				/>
			</View>
		);
	}
	componentDidMount()
	{
		this.refs.listView.startHeaderRefreshing();
	}
	componentWillUnmount()
	{
		
	}
	//}}}
}
//}}}

//{{{ styles
const styles=StyleSheet.create({
});
//}}}

export default Home;
