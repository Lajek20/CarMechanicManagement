package dk.znautocenter.pojo;

public class Tire {
   private Integer tireId;
    private String type;
    private String dimensions;
    private String brand;
    private String condition;
    private String owner;
    private String comments;
    private String location;
    private String date;

    public Integer getTireId() {
        return tireId;
    }

    public String getType() {
        return type;
    }

    public String getDimensions() {
        return dimensions;
    }

    public String getBrand() {
        return brand;
    }

    public String getCondition() {
        return condition;
    }

    public String getOwner() {
        return owner;
    }

    public String getComments() {
        return comments;
    }

    public String getLocation() {
        return location;
    }

    public String getDate() {
        return date;
    }


    public Tire(Integer tireId, String type, String dimensions, String brand, String condition, String owner, String comment, String location, String date) {
        this.tireId = tireId;
        this.type = type;
        this.dimensions = dimensions;
        this.brand = brand;
        this.condition = condition;
        this.owner = owner;
        this.comments = comment;
        this.location = location;
        this.date = date;
    }

    public Tire() {

    }

    public void setTireId(Integer tireId) {
        this.tireId = tireId;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Tire{" +
                "tireId=" + tireId +
                ", type='" + type + '\'' +
                ", dimensions='" + dimensions + '\'' +
                ", brand='" + brand + '\'' +
                ", condition='" + condition + '\'' +
                ", owner='" + owner + '\'' +
                ", comments='" + comments + '\'' +
                ", location='" + location + '\'' +
                ", date='" + date + '\'' +
                '}';
    }
}




