import SqliteStorage from 'react-native-sqlite-storage';
class Model
{
	set db(db)
	{
		this._db=db;
	}
	constructor(name,schema)
	{
		this.name=name;
		this.schema=schema;
	}
	save(data,success,error)
	{
		data.forEach((d,i)=>
		{
			let keys=Object.keys(d).join(',');
			let length=Object.keys(d).length;
			let w="";
			for(let i=0;i<length;i++)
			{
				if (i==length-1)
				{
					w+="?";
				}
				else{
					w+="?,"
				}
			}
			let values=Object.values(d);
			let sql='INSERT INTO ' +this.name+" ("+keys+") VALUES("+w+");";
			this._db.executeSql(sql,
				values,success,error
			//	()=>{
			//		console.log("save success"+this.name);
			//	},
			//	()=>{
			//		console.log("save error"+this.name);
			//	}
			);
		});
	}
	find(name,result,error)
	{
		this._db.executeSql('SELECT * FROM '+this.name+' WHERE name=?',[name],result,error);
	}
	delete(name,success,error)
	{
		this._db.executeSql('DELETE FROM '+this.name+' WHERE name=?',[],success,error);
	}
	create()
	{
		this._db.transaction(tx=>{
			let param="";
			let t=this.schema;
			let length=Object.keys(t).length;
			let i=0;
			for(let p in t)
			{
				if (typeof t[p] === 'object')
				{
					param+=p;
					if (t[p].dataType)
					{
						param+=" "+t[p].dataType;
					}
					if (t[p].primary)
					{
						param+=" PRIMARY";
					}
					if (t[p].keyNotNull)
					{
						param+=" KEY NOT NULL";
					}
				}
				else if (typeof t[p] === 'string')
				{
					param+=p+" "+t[p];	
				}
				else{
					console.error('laohan:value must object or string');
				}
				if (i<length-1)
				{
					param+=",";
				}
				i++;
			}
			//console.log(this.schema);
			//console.log(this.name);
			tx.executeSql('CREATE TABLE IF NOT EXISTS '+this.name+' ('+param+');',[],this.successCallback,this.errorCallback);
		},error=>{
			console.error('laohan:createtable error');
		},()=>{
			console.log('laohan:create success ->'+this.name);
		});	
	}
}
function Sqlite()
{
	this.db=null;
	this.models={};
}
Sqlite.prototype.connect=function(config,success,error)
{
	this.db=SqliteStorage.openDatabase(
		config.name,
		config.version,
		config.displayname,
		config.size,
		success,error
	);
	for(let m in this.models)
	{
		this.models[m].db=this.db;
		this.models[m].create();
	}
}
Sqlite.prototype.model=function(tablename,schema)
{
	let m=new Model(tablename,schema);
	this.models[tablename]=m;
	return m;
}
Sqlite.prototype.close=function()
{
	this.db.close();
}
var sqlite=new Sqlite();
export default sqlite;
