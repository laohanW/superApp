import {protocol} from '../core';
import HomeController from '../controller/HomeController';
let HomeAction={}
HomeAction.PostHomeData=function()
{
	HomeController.setMenuData([
		{ title: '美食'},
		{title: '电影'}
	]);
	HomeController.setDiscountData([
		{
			maintitle:"title1",
			typefaceColor:"#f0f0ff",
			subtitle:"subtitle1"
		},
		{
			maintitle:"title1",
			typefaceColor:"#f0f0ff",
			subtitle:"subtitle1"
		}
	]);
	HomeController.setRecommendData([
		{
			title:"test1",
			subtitle:"test1",
			price:2
		},
		{
			title:"test3",
			subtitle:"test3",
			price:3
		}
	]);
	return {type:"POST_HOME"};
	/*return dispatch=>{
		fetch(protocol.url+"/api/login",{
			method:"POST",
			headers:{
				'Content-Type':'application/json',
				'Accept':'application/json'
			},
			body:JSON.stringify({'username':username,'password':password})
		}).then(res=>{
			return res.json();
		}).then(json=>{
			console.log(json);
			dispatch({type:"TEST",test:"Login"});
		}).catch(err=>{
			console.log(err);
		});
		dispatch({type:"TEST",test:""});
	};*/
}

export default HomeAction;
