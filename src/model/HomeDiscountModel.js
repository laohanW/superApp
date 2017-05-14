import sqlite from '../core/sqlite';
const schema={
	id:{
		dataType:"INTEGER",
		primary:true,
		keyNotNull:true
	},
	maintitle:"VARCHAR",
	typefaceColor:"VARCHAR",
	subtitle:"VARCHAR"
}
export default sqlite.model('T_Home_Discount',schema);
