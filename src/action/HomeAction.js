import {protocol} from '../core';
import {setMenuData,setRecommendData,setDiscountData} from '../controller/HomeController';
let internals={
	PostHomeDataAction:function()
	{
		setMenuData([
			{ title: '美食'},
			{ title: '电影'}
		]);
		setDiscountData([
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
		setRecommendData([
			{
				id:1,
				title:"test1",
				subtitle:"[2]test1",
				price:2
			},
			{
				id:2,
				title:"test3",
				subtitle:"[2]test3",
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
};
export default internals;
