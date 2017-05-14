const initialState={
	test:"",
	homeDataPosted:false
};

function HomeReducer(state=initialState,action)
{
	switch(action.type)
	{
		case "POST_HOME":
			let o=Object.assign({},state,{
				homeDataPosted:true
			});
			return o;
		default:
			return state;
	}
}
export default HomeReducer;
