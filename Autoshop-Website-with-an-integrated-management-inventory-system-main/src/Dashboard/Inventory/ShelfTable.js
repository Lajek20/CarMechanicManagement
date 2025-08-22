import Table from "../Table/Table";
import React from "react";
import axios from "axios";
class ShelfTable extends React.Component  {
    // Executes after the component is rendered for the first time
    //componentDidMount()
    
    constructor() {
        super();
        this.tierHeaders = [
          "tireId",
          "type",
          "dimensions",
          "brand",
          "condition",
          "owner",
          "comments",
          "location",
          "date",
        ];
        this.rimHeaders = [
          "rimId",
          "condition",
          "dimensions",
          "brand",
          "color",
          "material",
          "owner",
          "comments",
          "location",
          "date",
        ];

        this.state = {
            Tiredata: [],
            Rimdata: []
          }

      }

      componentDidMount(){
        axios.get("http://localhost:9000/Dashboard/GetRims").then(result => {
            const data = result.data;
            this.setState({ Rimdata: data.Rims });
          }).catch(error => {
            console.log(error);
          }
          )

          axios.get("http://localhost:9000/Dashboard/GetTires").then(result => {
            const data = result.data;
            this.setState({ Tiredata: data.Tires });
          }).catch(error => {
            console.log(error);
          }
          )

      }



    render()
    {
        return(
        <div id="Shelf-table">
        <Table tableName="Dæk ID#" headers={this.tierHeaders} data={this.state.Tiredata} />
        <Table tableName="Fælge ID#" headers={this.rimHeaders} data={this.state.Rimdata}/>
        </div> 
        )
    }
    }


export default ShelfTable;