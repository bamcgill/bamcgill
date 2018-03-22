/**
 * Keep all the examples used in the drop down examples
 */
var text_simple_query = 'SELECT sysdate FROM dual;';
var json_simple_query = `{ "statementText":"` + text_simple_query + `"}`;
var text_ddl = 'CREATE TABLE T1(col1 int);';
var text_dml = 'INSERT INTO T1 VALUES(1);';
var text_plsql = 'BEGIN\n  DBMS_OUTPUT.PUT_LINE(\'Hello From PL/SQL\');\nEND;\n/';
var text_sqlplus = 'DESC all_tables';
var text_sqlcl = `info sys.all_users;`;
var text_script = `CREATE TABLE ADHOC_TABLE_SIMPLE(col1 INT);
CREATE TABLE ADHOC_TABLE_DATE(col1 INT, col2 DATE);
CREATE OR REPLACE TYPE ADHOC_VARRAY_NUMBER AS VARRAY(3) OF NUMBER;
/
CREATE OR REPLACE TYPE ADHOC_VARRAY_VARCYHAR2 AS VARRAY(3) OF VARCHAR2(10);
/
CREATE OR REPLACE PROCEDURE ADHOC_PROC_SIMPLE
AS
BEGIN
  dbms_output.put_line('Inside ADHOC_PROC_SIMPLE using DBMS_OUTPUT.PUT_LINE');
END;
/
CREATE OR REPLACE PROCEDURE ADHOC_PROC_SIMPLE_PARAM( param1 NUMBER )
AS
BEGIN
  INSERT INTO ADHOC_TABLE_SIMPLE VALUES(param1);
END;
/
CREATE OR REPLACE PROCEDURE ADHOC_PROC_SIMPLE_OUTPARAM(
    param1 IN NUMBER,
    param2 OUT NUMBER)
AS
BEGIN
  param2 := param1+100;
END;
/
CREATE OR REPLACE FUNCTION ADHOC_FUNC_SIMPLE RETURN VARCHAR2
AS
BEGIN
  RETURN 'hello from simplefunc';
END;
/
CREATE OR REPLACE PROCEDURE ADHOC_PROC_SIMPLE_OUT_CURSOR( param1 OUT SYS_REFCURSOR )
AS
BEGIN
  OPEN param1 FOR SELECT 'inside outproccursor' AS col1 FROM dual;
END;
/`;
var text_sqlplus_bind_var = `var var1 number  
var var2 number  
exec :var1 := 1;  
exec :var2 := 100;  
  
select table_name, num_rows 
  from user_tables 
 where num_rows > :var1 
   and num_rows < :var2 ; 
`;

var json_pagination = `{  
  "statementText": "select object_name from all_objects",  
  "offset": 25,  
  "limit": 25,  
  "$asof": {"$scn": "1273919"}  
} `;

var json_bind_query = `{ 
	  "statementText": "SELECT ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? FROM dual",
	  "binds":[ 
	{"index":1,"data_type":"NUMBER","value":123},
	{"index":2,"data_type":"NUMERIC","value":123},
	{"index":3,"data_type":"DECIMAL","value":123},
	{"index":4,"data_type":"DEC","value":123},
	{"index":5,"data_type":"NUMBER","value":123},
	{"index":6,"data_type":"INTEGER","value":123},
	{"index":7,"data_type":"INT","value":123},
	{"index":8,"data_type":"SMALLINT","value":123},
	{"index":9,"data_type":"FLOAT","value":123},
	{"index":10,"data_type":"DOUBLE PRECISION","value":123},
	{"index":11,"data_type":"REAL","value":123},
	{"index":12,"data_type":"BINARY_FLOAT","value":123},
	{"index":13,"data_type":"BINARY_DOUBLE","value":123},
	{"index":14,"data_type":"CHAR","value":"abc"},
	{"index":15,"data_type":"CHARACTER","value":"abc"},
	{"index":16,"data_type":"VARCHAR","value":"abc"},
	{"index":17,"data_type":"VARCHAR2","value":"abc"},
	{"index":18,"data_type":"CHAR VARYING","value":"abc"},
	{"index":19,"data_type":"CHARACTER VARYING","value":"abc"},
	{"index":20,"data_type":"NCHAR","value":"abc"},
	{"index":21,"data_type":"NATIONAL CHAR","value":"abc"},
	{"index":22,"data_type":"NATIONAL CHARACTER","value":"abc"},
	{"index":23,"data_type":"NVARCHAR","value":"abc"},
	{"index":24,"data_type":"NVARCHAR2","value":"abc"},
	{"index":25,"data_type":"NCHAR VARYING","value":"abc"},
	{"index":26,"data_type":"NATIONAL CHAR VARYING","value":"abc"},
	{"index":27,"data_type":"NATIONAL CHARACTER VARYING","value":"abc"},
	{"index":28,"data_type":"DATE","value":"01-Jan-2016"},
	{"index":29,"data_type":"TIMESTAMP","value":"1997-01-31 09:26:50.124"},
	{"index":30,"data_type":"TIMESTAMP","value":"1997-01-31 09:26:50.124"},
	{"index":31,"data_type":"TIMESTAMP WITH LOCAL TIME ZONE","value":"1997-01-31 09:26:50.124"},
	{"index":32,"data_type":"TIMESTAMP WITH TIME ZONE","value":"1997-01-31 09:26:50.124"},
	{"index":33,"data_type":"INTERVALYM","value":"09-10"},
	{"index":34,"data_type":"INTERVAL YEAR TO MONTH","value":"10-10"},
	{"index":35,"data_type":"INTERVAL YEAR(2) TO MONTH","value":"10-10"},
	{"index":36,"data_type":"INTERVALDS","value":"11 10:10:10"},
	{"index":37,"data_type":"INTERVAL DAY TO SECOND","value":"08 10:10:10"},
	{"index":38,"data_type":"INTERVAL DAY(2) TO SECOND(6)","value":"07 10:10:10"},
	{"index":39,"data_type":"ROWID","value":1},
	{"index":40,"data_type":"RAW","value":"AB"},
	{"index":41,"data_type":"LONG RAW","value":"AB"},
	{"index":42,"data_type":"CLOB","value":"clobvalue"},
	{"index":43,"data_type":"NCLOB","value":"clobvalue"},
	{"index":45,"data_type":"LONG","value":"A"},
	{"index":46,"data_type":"VARCHAR","value":"abc"},
	{"index":47,"data_type":"BINARY_DOUBLE","value":123}
	]
}`;

var json_bind_varray = `{ 
  "statementText": "SELECT ? as col_ARRAY FROM dual",
  "offset": 0,
  "limit": 5,
  "binds":[ 
{"index":1,"data_type":"VARRAY", "type_name":"ADHOC_VARRAY_NUMBER","value":[1,5,3]}
]
}`;

var json_proc_param = `{ 
  "statementText": "exec ADHOC_PROC_SIMPLE_PARAM(?)",
  "binds":[ {"index":1,"data_type":"NUMBER","value":77} ]
}
`;

var json_proc_param_out = `{ 
  "statementText": "exec ADHOC_PROC_SIMPLE_OUTPARAM(?,?)",
  "binds":[ {"index":1,"data_type":"NUMBER","value":77},
            {"index":2,"data_type":"NUMBER","mode":"out"}
  ]
}
`;

var json_proc_param_out_cursor = `{ 
  "statementText": "exec ADHOC_PROC_SIMPLE_OUT_CURSOR(?)",
  "binds":[ {"index":1,"data_type":"CURSOR","mode":"out"}]
}
`;

var json_block_inout = `{ 
  "statementText":"begin ? := ? + 1; ? := ? +2 ; end;",
  "binds":[ {"index":1,"data_type":"NUMBER","mode":"out"},
            {"index":2,"data_type":"NUMBER","value":7} ,
            {"index":3,"data_type":"NUMBER","mode":"out"} ,
            {"index":4,"data_type":"NUMBER","value":8} 
          ]
}
`;

var json_block_inout_bindbyname = `{ 
  "statementText":"begin :mybind1 := :mybind2 + 1; :mybind3 := :mybind4 +2 ; end;",
  "binds":[ {"name":"mybind1","data_type":"NUMBER","mode":"out"},
            {"name":"mybind2","data_type":"NUMBER","value":7} ,
            {"name":"mybind3","data_type":"NUMBER","mode":"out"} ,
            {"name":"mybind4","data_type":"NUMBER","value":8} 
          ]
}
`;

var json_function_binds = `{ 
	  "statementText":"exec  ? := addTen(?);",
	  "binds":[ {"index":1,"data_type":"NUMBER","mode":"out"},
	            {"index":2,"data_type":"NUMBER","value":20} 
	          ]
	}
`;

var json_jdbc_function_binds = `{ 
		  "statementText":"{ ? = call addTen(?)}",
		  "binds":[ {"index":1,"data_type":"NUMBER","mode":"out"},
		            {"index":2,"data_type":"NUMBER","value":20} 
		          ]
		}
`;

var text_date = `SELECT TO_DATE('2016-01-01 10:00:03','yyyy-mm-dd hh24:mi:ss' ) winter,
TO_DATE('2016-07-01 10:00:03','yyyy-mm-dd hh24:mi:ss' ) summer
FROM dual;
`;

var ct_sql = "application/sql";
var ct_json = "application/json";
//**************************************************************************************************//
var examples = [{
        name: "text_simple_query",
        value: text_simple_query,
        contentType : ct_sql
    },
    {
        name: "json_simple_query",
        value: json_simple_query,
        contentType : ct_json
    },
    {
        name: "text_ddl",
        value: text_ddl,
        contentType : ct_sql
    },
    {
        name: "text_dml",
        value: text_dml,
        contentType : ct_sql
    },
    {
        name: "text_plsql",
        value: text_plsql,
        contentType : ct_sql
    },
    {
        name: "text_sqlplus",
        value: text_sqlplus,
        contentType : ct_sql
    },
    {
        name: "text_sqlcl",
        value: text_sqlcl,
        contentType : ct_sql
    },
    {
        name: "text_script",
        value: text_script,
        contentType : ct_sql
    },
    {
        name: "text_sqlplus_bind_var",
        value: text_sqlplus_bind_var,
        contentType : ct_sql
    },
    {
        name: "text_date",
        value: text_date,
        contentType : ct_sql
    },
    {
        name: "json_pagination",
        value: json_pagination,
        contentType : ct_json
    },
    {
        name: "json_bind_query",
        value: json_bind_query,
        contentType : ct_json
    },
    {
        name: "json_bind_varray",
        value: json_bind_varray,
        contentType : ct_json
    },
    {
        name: "json_proc_param",
        value: json_proc_param,
        contentType : ct_json
    },
    {
        name: "json_proc_param_out ",
        value: json_proc_param_out,
        contentType : ct_json
    },
    {
        name: "json_proc_param_out_cursor",
        value: json_proc_param_out_cursor,
        contentType : ct_json
    },
    {
        name: "json_block_inout",
        value: json_block_inout,
        contentType : ct_json
    },
    {
        name: "json_block_inout_bindbyname",
        value: json_block_inout_bindbyname,
        contentType : ct_json
    },
    {
        name: "json_function_binds",
        value: json_function_binds,
        contentType : ct_json
    }
];
  