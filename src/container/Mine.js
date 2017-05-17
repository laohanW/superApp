import React from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet,
	ScrollView,
	RefreshControl,
	Image
} from 'react-native';
import { Heading1, Heading2, Paragraph } from '../component/Text'
import { screen, system, tool } from '../core'
import { color, DetailCell, NavigationItem, SpacingView } from '../component'


class Mine  extends React.Component
{
	constructor(props)
	{
		super(props);
        this.state = {
            isRefreshing: false
        }
		this.renderCells=this.renderCells.bind(this);
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
	onHeaderRefresh()
	{
		this.setState({isRefreshing:true});
		setTimeout(()=>{
			this.setState({isRefreshing:false});
		},2000)
	}
	renderCells()
	{
		let cells=[];
		let dataList=this.getDataList();
		for(let i =0;i<dataList.length;i++)
		{
			let subList=dataList[i];
			for(let j=0;j<subList.length;j++)
			{
				let data=subList[j];
				let cell=<DetailCell title={data.title} subTitle={data.subtitle} key={data.title} />
				cells.push(cell);
			}
			cells.push(<SpacingView key={i}/>)
		}
		return(
			<View>
				{cells}
			</View>
		);
	}
	renderHeader(){
		return(
			<View>
				<View>
					
				</View>
			</View>
		);
	}
    getDataList() {
        return (
            [
                [
                    { title: '我的钱包', subtitle: '办信用卡' },
                    { title: '余额', subtitle: '￥95872385'},
                    { title: '抵用券', subtitle: '63'},
                    { title: '会员卡', subtitle: '2' }
                ],
                [
                    { title: '好友去哪' },
                    { title: '我的评价'},
                    { title: '我的收藏'},
                    { title: '会员中心', subtitle: 'v15' },
                    { title: '积分商城', subtitle: '好礼已上线' }
                ],
                [
                    { title: '客服中心' },
                    { title: '关于美团', subtitle: '我要合作' }
                ]
            ]
        )
    }
	render()
	{
		return(
			<View>
				<ScrollView
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={()=>this.onHeaderRefresh()}
							tintColor='gray'
						/>
					}
				>
				{this.renderHeader()}
				<SpacingView />
				{this.renderCells()}
				</ScrollView>
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
