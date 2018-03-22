/**
 * Keep all the examples used in the drop down examples
 */
var csv = ` 
{
     "statementText":"select table_name,tablespace_name from all_tables",
     "formatDetails":{
        "format":"csv",
        "lineTerminator":"\\n",
        "leftEnclosure":"\\"",
        "rightEnclosure":"\\"",
        "header":true
     }
}
	 
`;
 var insert  = ` 
{
     "statementText":"select table_name,tablespace_name from all_tables",
     "formatDetails":{
        "format":"insert",
        "tableName": "EXPORT_TABLE",
        "lineTerminator":"\\n",
        "rowInterval":100,
        "isInsertCommit":true
     }
}
	 
`;
 var delim = ` 
{
     "statementText":"select table_name,tablespace_name from all_tables",
     "formatDetails":{
        "format":"delimited",
        "delimiter": "|",
        "lineTerminator":"\\n",
        "leftEnclosure":"\\"",
        "rightEnclosure":"\\"",
        "header":true
     }
}	 
`;
 var fixed = ` 
{
     "statementText":"select table_name,tablespace_name from all_tables",
     "formatDetails":{
        "format":"fixed",
        "lineTerminator":"\\n",
        "header":true
     }
}	 
`;
 var html = ` 
{
     "statementText":"select table_name,tablespace_name from all_tables",
     "formatDetails":{
        "format":"html",
        "lineTerminator":"\\n"
     }
}	 
`;
 var json = ` 
{
     "statementText":"select table_name,tablespace_name from all_tables",
     "formatDetails":{
        "format":"json"

     }
}	 
`;
 var loader = ` 
{
     "statementText":"select table_name,tablespace_name from all_tables",
     "formatDetails":{
        "format":"loader",
        "tableName": "EXPORT_TABLE",
        "delimiter": "|",
        "lineTerminator":"\\n",
        "leftEnclosure":"\\"",
        "rightEnclosure":"\\"",
        "isCompressed":true
     }
}	 
`;
 var text = ` 
{
     "statementText":"select table_name,tablespace_name from all_tables",
     "formatDetails":{
        "format":"text",
        "lineTerminator":"\\n",
        "leftEnclosure":"\\"",
        "rightEnclosure":"\\"",
        "header":true
     }
}	 
`;
 var xml = ` 
{
     "statementText":"select table_name,tablespace_name from all_tables",
     "formatDetails":{
        "format":"xml",
        "lineTerminator":"\\n"
     }
}	 
 `;
        
var ct_json = "application/json";

//**************************************************************************************************//
var examples = [{
        name: "csv",
        value: csv,
        contentType : ct_json
    },
   {
        name: "insert",
        value: insert,
        contentType : ct_json
    },
    {
        name: "delim",
        value: delim,
        contentType : ct_json
    },
    {
        name: "fixed",
        value: fixed,
        contentType : ct_json
    },
	{
		name: "html",
		value: html,
		contentType : ct_json
	},
	{
	    name: "json",
	    value: json,
	    contentType : ct_json
	},
	{
	    name: "loader",
	    value: loader,
	    contentType : ct_json
	},
	{
	    name: "text",
	    value: text,
	    contentType : ct_json
	},
	{
	    name: "xml",
	    value: xml,
	    contentType : ct_json
	}
];
  