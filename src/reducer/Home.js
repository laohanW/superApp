const initialState={
	test:""
};

function HomeReducer(state=initialState,action)
{
	switch(action)
	{
		case "POST_HOME":
			return Object.assign({},state,{
				homeDataPosted:true
			});
		default:
			return state;
	}
}
export default HomeReducer;
