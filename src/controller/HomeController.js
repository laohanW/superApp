import realm from '../model/HomeModel';
let internals={
	getRecommendData:function()
	{
		return realm.objects('Recommend');
	},
	getMenuData:function()
	{
		return realm.objects("Menu");
	},
	setRecommendData:function(data)
	{
		data.forEach(function(d,i){
			realm.create("Menu",{
				id:i,
				title:d.title,
				subtitle:d.subtitle,
				price:d.price
			});
		});
	},
	setMenuData:function(data)
	{
		data.forEach(function(d,i){
			realm.create("Menu",{
				title:d.title
				//iconUrl:d.
			});
		});
	},
	setDiscount:function(data)
	{
		data.forEach(function(d,i){
			realm.create("Menu",{
				id:i,
				maintitle:d.maintitle,
				typefaceColor:d.typefaceColor,
				subtitle:d.subtitle
				// imageUrl:
			});
		});
	}
};

export default internals;