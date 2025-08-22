package dk.znautocenter.controllers;


import dk.znautocenter.DbManager.DBManager;
import dk.znautocenter.pojo.Rim;
import dk.znautocenter.pojo.Tire;
import dk.znautocenter.pojo.User;
import org.json.simple.JSONObject;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/Dashboard")
public class Controller {


    @Path("/User")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject post(User user){
        try{
            System.out.println(user);
            Integer userId = DBManager.getInstance().insertUser(user.getUsername(),user.getPassword(), user.isAdmin());
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("userId", userId);
            jsonObject.put("admin",user.isAdmin());
            jsonObject.put("Username",user.getUsername());
            jsonObject.put("Password",user.getPassword());

            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }



    @Path("/addTire")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject addTire(Tire tire){
        try{
            System.out.println(tire);
           Integer tireId = DBManager.getInstance().insertTire(tire);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Success",true);
            jsonObject.put("tireId", tireId);
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }

    @Path("/DeleteTire/{tireId}")
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject DeleteTire(@PathParam("tireId") Integer tireId){
        try{

            DBManager.getInstance().DeleteTire(tireId);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Success",true);
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }






    @Path("/addRim")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject addrim(Rim rim){
        try{
            System.out.println(rim);
           Integer rimId = DBManager.getInstance().insertRim(rim);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Success",true);
            jsonObject.put("rimId", rimId);
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }

    @Path("/DeleteRim/{rimId}")
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject DeleteRim(@PathParam("rimId") Integer rimId){
        try{

            DBManager.getInstance().DeleteRim(rimId);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Success",true);
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }









    @Path("/User")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)

    public JSONObject get(@QueryParam("username") String username, @QueryParam("password") String password){
        try{

            User user = DBManager.getInstance().getUser(username, password);
            JSONObject jsonObject = new JSONObject();
            if (user == null){
                jsonObject.put("Userfound", false);
                jsonObject.put("error", "user not found");
                return  jsonObject;
            }
            jsonObject.put("Userfound", true);

            jsonObject.put("Username",user.getUsername());
            jsonObject.put("isAdmin",user.isAdmin());
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }
    }

    @Path("/Users")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)

    public JSONObject getAllUser(@DefaultValue("") @QueryParam("field") String field,
                                 @DefaultValue("") @QueryParam("search") String search){

        try{

            List<User> users = DBManager.getInstance().getAllUsers(field, search);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Users",users);

            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }
    }

    @Path("/editUser")
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject editUser(User user){
        try{
            DBManager.getInstance().editUser(user);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Success",true);
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }

    @Path("/DeleteUser/{userId}")
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject DeleteUser(@PathParam("userId") Integer userId){
        try{

            DBManager.getInstance().DeleteUser(userId);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Success",true);
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }







    @Path("/GetTires")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)

    public JSONObject getTires( @DefaultValue("") @QueryParam("field") String field,
                                @DefaultValue("") @QueryParam("search") String search,
                                @DefaultValue("") @QueryParam("order_field") String order_field,
                                @DefaultValue("") @QueryParam("ordering") String ordering){
        try{

            List<Tire> Tires = DBManager.getInstance().getTires(field, search, order_field, ordering);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Tires",Tires);


            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }
    }


    @Path("/editTire")
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject editTire(Tire tire){
        try{
            DBManager.getInstance().editTire(tire);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Success",true);
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }




    @Path("/GetRims")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)

    public JSONObject getRims(@DefaultValue("") @QueryParam("field") String field,
                              @DefaultValue("") @QueryParam("search") String search,
                              @DefaultValue("") @QueryParam("order_field") String order_field,
                              @DefaultValue("") @QueryParam("ordering") String ordering){
        try{

            List<Rim> Rims = DBManager.getInstance().getRim(field, search, order_field, ordering);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Rims",Rims);

            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }
    }



    @Path("/editRims")
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public JSONObject editRims(Rim rim){
        try{
            DBManager.getInstance().editRims(rim);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("Success",true);
            return jsonObject;
        }catch (WebApplicationException wae) {
            throw wae;
        } catch (Exception e) {
            throw new InternalServerErrorException("Unable to get hello world");
        }

    }









}
