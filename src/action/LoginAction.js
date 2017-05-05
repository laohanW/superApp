import fetch from 'isomorphic-fetch';
import protocol from '../core/constant/protocol';
function LoginAction(username,password)
{
	return dispatch=>{
		fetch(protocol+"/api/login",{
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
	};
}