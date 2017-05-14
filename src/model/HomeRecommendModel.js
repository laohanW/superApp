import sqlite from '../core/sqlite';
const schema={
	id:{
		dataType:"INTEGER",
		primary:true,
		keyNotNull:true
	},
	title:"VARCHAR",
	subtitle:"VARCHAR",
	price:"INTEGER"
}
export default sqlite.model('T_Home_Recommend',schema);
