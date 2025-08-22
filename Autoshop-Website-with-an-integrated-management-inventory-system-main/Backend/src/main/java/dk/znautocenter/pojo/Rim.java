package dk.znautocenter.pojo;

public class Rim {
    private Integer rimId;
    private String condition;
    private String dimensions;
    private String brand;
    private String color;
    private String material;
    private String owner;
    private String comments;
    private String location;
    private String date;

    public Rim() {
    }

    public Integer getRimId() {
        return rimId;
    }

    public void setRimId(Integer rimId) {
        this.rimId = rimId;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getDimensions() {
        return dimensions;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Rim(Integer rimId, String condition, String dimensions, String brand, String color, String material, String owner, String comments, String location, String date) {
        this.rimId = rimId;
        this.condition = condition;
        this.dimensions = dimensions;
        this.brand = brand;
        this.color = color;
        this.material = material;
        this.owner = owner;
        this.comments = comments;
        this.location = location;
        this.date = date;
    }
}


