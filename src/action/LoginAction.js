import {protocol} from '../core';
function LoginAction(username,password)
{
	return dispatch=>{
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
	};
}
export default LoginAction;
