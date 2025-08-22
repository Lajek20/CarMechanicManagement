package dk.znautocenter.DbManager;

import dk.znautocenter.pojo.Rim;
import dk.znautocenter.pojo.Tire;
import dk.znautocenter.pojo.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;


public class DBManager {

    private static DBManager dbManager;
    private final Connection connection;

    private DBManager() throws Exception {
        this.connection = connect();
    }

    public static DBManager getInstance() throws Exception {
        if (dbManager == null) {
            dbManager = new DBManager();
        }
        return dbManager;
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception {
        DBManager dbManager = new DBManager();
        //dbManager.createTable();
        dbManager.TireTable();

       // System.out.println( dbManager.getTires());
        dbManager.RimTable();


        //dbManager.insertRow("znbiler@yahoo.com","123456");
        // dbManager.getUser("znbiler@yahoo.com");
    }

    /**
     * Connect to a sample database
     */
    private Connection connect() throws Exception {
        Connection conn = null;
        try {
            // db parameters
            String url = "jdbc:sqlite:userdb.db";
            // create a connection to the database
            conn = DriverManager.getConnection(url);

            System.out.println("Connection to SQLite has been established.");
            return conn;

        } catch (SQLException e) {
            throw new Exception(e);
        }
    }


    private void createTable() {
        String sql = "CREATE TABLE IF NOT EXISTS users (userId integer primary key AUTOINCREMENT, username text NOT NULL, password text NOT NULL); " +
                "CREATE UNIQUE INDEX username_index on users('username');";
        try {
            Statement stmt = connection.createStatement();
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Integer insertUser(String username, String password, boolean admin) {
        String sql = "INSERT INTO users (username, password,admin) VALUES(?,?,?)";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
            pstmt.setString(1, username);
            pstmt.setString(2, password);
            pstmt.setBoolean(3, admin);
            pstmt.executeUpdate();

            try (ResultSet generatedKeys = pstmt.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                   return  generatedKeys.getInt(1);
                }
                else {
                    throw new SQLException("Creating user failed, no ID obtained.");
                }
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public User getUser(String username, String password) {
        String sql = "SELECT * FROM users where username=? and password =?";

        try {
            PreparedStatement stmt = connection.prepareStatement(sql);
            stmt.setString(1, username);
            stmt.setString(2, password);
            ResultSet rs = stmt.executeQuery();

            // loop through the result set
            while (rs.next()) {
                User user = new User(rs.getInt("userID"),rs.getString("username"), rs.getString("password"),rs.getInt("admin")==1);
                return user;
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }


    public List<User> getAllUsers(String field, String search) {
        List<User> userList = new ArrayList<>();
        String sql = "SELECT * FROM users";                                                      
        if (!field.isEmpty() && !search.isEmpty()) {                                             
            sql += " WHERE UPPER(" + field + ") LIKE '%" + search.toUpperCase() + "%'";          
        }
        try {


            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                userList
                        .add(
                                new User(rs.getInt("userId"), rs.getString("username"), rs.getString("password"), rs.getInt("admin") == 1));
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userList;
    }

    public void DeleteUser(Integer UserID) {
        String sql = "delete from users where userId = ?";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setInt(1, UserID);
            pstmt.execute();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public void editUser(User user) {
        String sql = "UPDATE users set username=?,password=?,admin =? where userId =? ";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getPassword());
            pstmt.setBoolean(3, user.isAdmin());
            pstmt.setInt(4, user.getUserId());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }




    public List<Tire> getTires(String field, String search, String order_field, String ordering) {
        List<Tire> tireList = new ArrayList<>();
        String sql = "SELECT * FROM tires";
        if (!field.isEmpty() && !search.isEmpty()) {
            sql += " WHERE UPPER(" + field + ") LIKE '%" + search.toUpperCase() + "%'";
        }
        if (!order_field.isEmpty()) {
            sql += " ORDER BY " + order_field;
            if(!ordering.isEmpty() && (ordering.equals("ASC") || (ordering.equals("DESC")))){
                   sql += " "+ ordering;
            }
        }

        
        try {


            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                tireList
                        .add(
                                new Tire(
                                        rs.getInt("tireId"),
                                        rs.getString("type"),
                                        rs.getString("dimensions"),
                                        rs.getString("brand"),
                                        rs.getString("condition"),
                                        rs.getString("owner"),
                                        rs.getString("comments"),
                                        rs.getString("location"),
                                        rs.getString("date")
                                ));
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return tireList;
    }



    // Table for the tire class
    private void TireTable() {
        String sql = "CREATE TABLE IF NOT EXISTS tires\n" +
                "(tireId integer NOT NULL PRIMARY KEY AUTOINCREMENT,\n" +
                "type varchar(20) NOT NULL,\n" +
                "dimensions varchar(30) NULL,\n" +
                "brand varchar(30) NULL,\n" +
                "condition varchar(30) NULL,\n" +
                "owner varchar(50) NULL,\n" +
                "comments varchar(1024) NULL,\n" +
                "location varchar(50) NULL,\n" +
                "date varchar(20) NULL);";

        try {
            Statement stmt = connection.createStatement();
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Integer insertTire(Tire tire) {
        String sql = "INSERT INTO tires (type, dimensions,brand, condition, owner, comments, location, date) VALUES(?,?,?,?,?,?,?,?)";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
           // pstmt.setInt(1, tire.getTireId());
            pstmt.setString(1, tire.getType());
            pstmt.setString(2, tire.getDimensions());
            pstmt.setString(3, tire.getBrand());
            pstmt.setString(4, tire.getCondition());
            pstmt.setString(5, tire.getOwner());
            pstmt.setString(6, tire.getComments());
            pstmt.setString(7, tire.getLocation());
            pstmt.setString(8, tire.getDate());

            pstmt.executeUpdate();
            try (ResultSet generatedKeys = pstmt.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                   return  generatedKeys.getInt(1);
                }
                else {
                    throw new SQLException("Creating user failed, no ID obtained.");
                }
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public void DeleteTire(Integer TireID) {
        String sql = "delete from tires where tireId = ?";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setInt(1, TireID);
            pstmt.execute();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public void editTire(Tire tire) {
        String sql = "UPDATE tires set type=?, dimensions=?,brand=?, condition=?, owner=?, comments=?, location=?, date=? where tireId=? ";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setString(1, tire.getType());
            pstmt.setString(2, tire.getDimensions());
            pstmt.setString(3, tire.getBrand());
            pstmt.setString(4, tire.getCondition());
            pstmt.setString(5, tire.getOwner());
            pstmt.setString(6, tire.getComments());
            pstmt.setString(7, tire.getLocation());
            pstmt.setString(8, tire.getDate());
            pstmt.setInt(9, tire.getTireId());


            pstmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }






    // Table for the rim class
    private void RimTable() {
        String sql = "CREATE TABLE IF NOT EXISTS rims\n" +
                "(rimId integer NOT NULL PRIMARY KEY AUTOINCREMENT,\n" +
                "condition varchar(30) NULL,\n" +
                "dimensions varchar(30) NULL,\n" +
                "brand varchar(30) NULL,\n" +
                "color varchar(10) NULL,\n" +
                "material varchar(30) NULL,\n" +
                "owner varchar(50) NULL,\n" +
                "comments varchar(1024) NULL,\n" +
                "location varchar(50) NULL,\n" +
                "date varchar(20) NULL);";

        try {
            Statement stmt = connection.createStatement();
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public Integer insertRim(Rim rim) {
        String sql = "INSERT INTO rims ( condition, dimensions,brand,color,material, owner, comments, location, date) VALUES(?,?,?,?,?,?,?,?,?)";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
           // pstmt.setInt(1, rim.getRimId());
            pstmt.setString(1, rim.getCondition());
            pstmt.setString(2, rim.getDimensions());
            pstmt.setString(3, rim.getBrand());
            pstmt.setString(4, rim.getColor());
            pstmt.setString(5, rim.getMaterial());
            pstmt.setString(6, rim.getOwner());
            pstmt.setString(7, rim.getComments());
            pstmt.setString(8, rim.getLocation());
            pstmt.setString(9, rim.getDate());


            pstmt.executeUpdate();
            try (ResultSet generatedKeys = pstmt.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    return  generatedKeys.getInt(1);
                }
                else {
                    throw new SQLException("Creating user failed, no ID obtained.");
                }
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return null;
    }


    public List<Rim> getRim(String field, String search, String order_field, String ordering) {

        List<Rim> RimList = new ArrayList<>();
        String sql = "SELECT * FROM rims";                                                      
        if (!field.isEmpty() && !search.isEmpty()) {                                             
            sql += " WHERE UPPER(" + field + ") LIKE '%" + search.toUpperCase() + "%'";          
        }                                                                                        
        if (!order_field.isEmpty()) {                                                            
            sql += " ORDER BY " + order_field;                                                   
            if(!ordering.isEmpty() && (ordering.equals("ASC") || (ordering.equals("DESC")))){    
                   sql += " "+ ordering;                                                         
            }                                                                                    
        }
        
        try {


            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                RimList
                        .add(
                                new Rim(
                                        rs.getInt("rimId"),
                                        rs.getString("condition"),
                                        rs.getString("dimensions"),
                                        rs.getString("brand"),
                                        rs.getString("color"),
                                        rs.getString("material"),
                                        rs.getString("owner"),
                                        rs.getString("comments"),
                                        rs.getString("location"),
                                        rs.getString("date")
                                ));
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return RimList;
    }

    public void DeleteRim(Integer rimId) {
        String sql = "delete from rims where rimId = ?";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setInt(1, rimId);


            pstmt.execute();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }



    public void editRims(Rim rim) {
        String sql = "UPDATE rims set condition=?, dimensions=?,brand=?,color=?,material=?, owner=?, comments=?, location=?, date=? where rimId=? ";
        try {
            PreparedStatement pstmt = connection.prepareStatement(sql);
            pstmt.setString(1, rim.getCondition());
            pstmt.setString(2, rim.getDimensions());
            pstmt.setString(3, rim.getBrand());
            pstmt.setString(4, rim.getColor());
            pstmt.setString(5, rim.getMaterial());
            pstmt.setString(6, rim.getOwner());
            pstmt.setString(7, rim.getComments());
            pstmt.setString(8, rim.getLocation());
            pstmt.setString(9, rim.getDate());
            pstmt.setInt(10, rim.getRimId());


            pstmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }










}



