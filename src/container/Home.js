//{{{ import
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity, 
	Image,
	ListView
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RefreshListView} from '../component';
import { Heading1, Heading2, Paragraph } from '../component/Text';
import { screen } from '../core';
import { color } from '../core';
import {PostHomeDataAction} from '../action/HomeAction';
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
class HomeMenuItem extends Component {
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
class HomeGridItem extends Component {
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

class HomeGridView extends Component {

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
		console.log(nextProps);
		// this.state.menu=homeData.menu;
		// this.state.discount=homeData.discount;
		// this.state.recommend=homeData.recommend;
		 this.refs.listView.endRefreshing(RefreshState.Failure)
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
		this.props.postHomeData();
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

export default connect(
	state=>{
		
	},
	dispatch=>{
		postHomeData:bindActionCreators(PostHomeDataAction,dispatch)
	}
)(Home);
