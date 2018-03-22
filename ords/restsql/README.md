# Doc Root for REST SQL
Place the files in doc_root into your ords doc_root.
Then you can run http://\<hostname\>:\<port\>/sql

#Introduction
For ORDS 3.0.10 and previous versions REST Enabled SQL is turned off by default. To enabled REST Enabled SQL feature and the REST Enabled SQL Export a preference has to be set in the default.xml of ORDS
REST Enabled SQL / REST Enabled SQL Export
The following preference can be set in the ORDS default.xml config file.
default.xml

<entry key="restEnabledSql.active">true</entry>

Enables the following features

 1.REST Enabled SQL
 1.REST Enabled SQL Export

An example of a configured default.xml can be found in the ORDS project under the "examples" project : /examples/confs/standalone_rest_enabled_sql

#REST Enabled Server Side Scripts

Turned on by default, no flag required.
#Note

In the past the a web client for REST Enabled SQL and REST Enabled SQL Export was available by using a flag in the default.xml. These web clients have been moved and can be found in the rest_enabled_sql example config in the ORDS project.
 
