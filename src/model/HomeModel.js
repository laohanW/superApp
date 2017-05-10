
let realm=new Realm({
	schema:[
		{
			name:"Menu",
			properties:{
				title:"string",
				iconUrl:"string"
			}
		},
		{
			name:"Discount",
			properties:{
				id:"int",
				maintitle:"string",
				typefaceColor:"string",
				subtitle:"string",
				imageUrl:"string"
			}
		},
		{
			name:"Recommend",
			properties:{
				id:"int",
				title:"string",
				subtitle:"string",
				price:"int"
			}
		}
	]
});

export default realm;