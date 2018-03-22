package oracle.dbtools.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class OJDBCConnection2 {
	public static void main(String[] args) {
		OJDBCConnection2.runConnection();
	}

	public static boolean runConnection() {
		// Rest driver credentials     
		String USER = "DEMO";
		String PASS = "demo";
		 String driver = "oracle.jdbc.driver.OracleDriver";
		String DB_URL = "jdbc:oracle:thin:@localhost:1521/orcl";
		Properties cred = new Properties();
		cred.put("user", USER);
		cred.put("password", PASS);
		try {
			Connection conn = DriverManager.getConnection(DB_URL, cred);
			String sql_create = "CREATE TABLE T1(col1 int)";
			String sql_insert = "INSERT INTO T1 VALUES(1)";
			String sql_select = "SELECT * FROM T1";
			String sql_drop = "drop table T1";
			Statement stmt = conn.createStatement();
			stmt.execute(sql_create);
			int rows = stmt.executeUpdate(sql_insert);
			System.out.println("Rows updated:" + rows + "\n");
			ResultSet rs = stmt.executeQuery(sql_select);
			while (rs.next()) {
				System.out.println("col1=" + rs.getInt(1));
			}
			stmt.execute(sql_drop);
			stmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
}
