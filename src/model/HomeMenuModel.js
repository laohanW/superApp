import sqlite from '../core/sqlite';
const schema={
	id:{
		dataType:"INTEGER",
		primary:true,
		keyNotNull:true
	},
	title:"VARCHAR"
};
export default sqlite.model('T_Home_Menu',schema);
