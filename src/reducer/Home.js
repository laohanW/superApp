const initialState={
	test:""
};

function HomeReducer(state=initialState,action)
{
	switch(action)
	{
		case "TEST":
			return Object.assign({},state,{
				test:"TEST"
			});
		default:
			return state;
	}
}
export default HomeReducer;
