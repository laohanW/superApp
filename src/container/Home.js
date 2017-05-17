//{{{ import
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ListView,
  ScrollView,
} from 'react-native'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RefreshListView,SpacingView,PageControl,color,RefreshState} from '../component';
import { Heading1, Heading2, Paragraph } from '../component/Text';
import { screen } from '../core';
import HomeAction from '../action/HomeAction';
import HomeController from '../controller/HomeController';
//}}}

//{{{ component
class GroupPurchaseCell extends React.Component {
    render() {
        let { info } = this.props
        let imageUrl = info.imageUrl?info.imageUrl.replace('w.h', '160.0'):"";
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
                <Image source={{ uri: imageUrl }} style={styles.icon} />

                <View style={styles.rightContainer}>
                    <Heading1>{info.title}</Heading1>
                    <View>
                    </View>
                    <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>{info.subtitle}</Paragraph>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Heading1 style={styles.price}>{info.price}元</Heading1>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}
class HomeMenuItem extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
                <Heading2>
                    {this.props.title}
                </Heading2>
            </TouchableOpacity>
        );
    }
}
class HomeMenuView extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			currentPage:0
		};
		this.onScroll=this.onScroll.bind(this);
	}
	onScroll(e)
	{
		let x=e.nativeEvent.contentOffset.x;
		let currentPage=x/screen.width;

		if (this.state.currentPage!=currentPage)
		{
			this.state({
				currentPage:currentPage
			});
		}
	}
	render()
	{
		let {menuInfos,onMenuSelected}=this.props;
		let menuItems=menuInfos.map(
			(info,i)=>{
				<HomeMenuItem
					key={info.title}
					title={info.title}
					onPress={()=>{
						onMenuSelected && onMenuSelected(i)
					}}
					/>
			}
		);
		let menuViews=[];
		let pageCount=Math.ceil(menuItems.length/10);
		for(let i=0;i<pageCount;i++)
		{
			let length=menuItems.length<(i*10)? menuItems.length-(i*10) : 10;
			let items=menuItems.slice(i*10,i*10+length);
			let menuView=(
				<View key={i}>
					{items}
				</View>
			);
			menuViews.push(menuView);
		}
		return(
			<View>
				<ScrollView
					onScroll={(e)=>this.onScroll(e)}
					showsHorizontalScrollIndicator={false}
					pagingEnabled={true}
					horizontal={true}
				>
					<View>
						{menuViews}
					</View>
				</ScrollView>
				<PageControl
					numberOfPages={pageCount}
					currentPage={this.state.currentPage}
					hidesForSinglePage={true}
					pageIndicatorTintColor='gray'
					currentPageIndicatorTintColor={color.theme}
					indicatorSize={{width:8,height:8}}
				/>
			</View>
		);
	}
}
class HomeGridItem extends React.Component {
    render() {
        let info = this.props.info

        let title = info.maintitle
        let color = info.typeface_color
        let subtitle = info.deputytitle
        let imageUrl = info.imageurl.replace('w.h', '120.0')

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View>
                    <Heading1 style={{ color: color, marginBottom: 10 }}>{title}</Heading1>
                    <Heading2 >{subtitle}</Heading2>
                </View>

                <Image style={styles.icon} source={{ uri: imageUrl }} />
            </TouchableOpacity>
        );
    }
}

class HomeGridView extends React.Component {

    static defaultProps = {
        infos: []
    }

    render() {
        let { infos } = this.props
        let gridItems = infos.map(
            (info, i) => (
                <HomeGridItem
                    info={infos[i]}
                    key={i}
                    onPress={() => this.props.onGridSelected(i)} />
            )
        )

        return (
            <View style={styles.container}>
                {gridItems}
            </View>
        );
    }
}
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
			menu:[],
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
				<HomeMenuView menuInfos={this.state.menu}/>
				<SpacingView />
				<HomeGridView info={this.state.discounts}/>
				<SpacingView />
				<View>
					<Heading2>猜你喜欢</Heading2>
				</View>
			</View>
		);
	}
	requestData()
	{
	}
	loadMenuInfos()
	{
		return [];
	}
	//}}}
	
	//{{{ native component
	componentWillReceiveProps(nextProps)
	{
		if (nextProps.homeDataPosted)
		{
			HomeController.getDiscountData(result=>{
				let dis=[];
				for(let i=0;i<result.rows.length;i++)
				{
					dis.push(result.rows.item(i));		
				}
				this.state.discounts=dis;
			},error=>{
				console.log(error);	
			});
			HomeController.getRecommendData(result=>{
				let rem=[];
				for(let i=0;i<result.rows.length;i++)
				{
					rem.push(result.rows.item(i));
				}
				let ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
				this.state.dataSource=ds.cloneWithRows(rem);
			},error=>{
				console.log(error);	
			});
			HomeController.getMenuData(result=>{
				let menu=[];
				for(let i=0;i<result.rows.length;i++)
				{
					menu.push(result.rows.item(i));
				}
				this.state.menu=menu;
			},
			error=>{
				console.log(error);
			});
		}
		this.refs.listView.endRefreshing(RefreshState.Idle);
	}
	componentWillMount()
	{
		
	}
	render()
	{
		console.log(this.state);
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
		setTimeout(()=>{
			this.props.PostHomeData();
		},1000);
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

function mapStateToProps(state)
{
	return {
		test:state.Home.test,
		homeDataPosted:state.Home.homeDataPosted
	}
}

export default connect(
	mapStateToProps,
	dispatch=>(
		{
			...bindActionCreators(HomeAction,dispatch)
		}
	)
)(Home);
