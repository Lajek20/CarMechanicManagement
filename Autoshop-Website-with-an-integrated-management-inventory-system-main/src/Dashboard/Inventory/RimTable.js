import Table from "../Table/Table";
import React from "react";
import axios from "axios";
import AddButtonForm from "../AddButtonForm";


class RimTable extends React.Component {
  // Executes after the component is rendered for the first time
  constructor() {
    super();
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

    this.rimHeadersEdit = [
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
      data: []
    }
  }




  componentDidMount() {
    axios.get("http://localhost:9000/Dashboard/GetRims").then(result => {
      const data = result.data;
      this.setState({ data: data.Rims });
    }).catch(error => {
      console.log(error);
    }
    )
  }

  editRim = (rimInfo) => {
    console.log("rimInfo: ", rimInfo);
    axios
      .put("http://localhost:9000/Dashboard/editRims", rimInfo
      )
      .then((result) => {
        console.log(result.data);
        var data = [...this.state.data];
        const indexOfItem = this.state.data.findIndex((item) => item.rimId === rimInfo.rimId);
        if (indexOfItem > -1) {
          data[indexOfItem] = { ...data[indexOfItem], ...rimInfo };
          this.setState({data: data});
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteRim=(rimId) =>{
    axios
      .delete("http://localhost:9000/Dashboard/DeleteRim/" + rimId)
      .then((result) => {
        console.log(result.data);
        var data = [...this.state.data];
        data = data.filter(item => item.rimId !== rimId);
        this.setState({ data: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addRim = (rimInfo) => {
    axios
      .post("http://localhost:9000/Dashboard/addRim", rimInfo
    )
    .then((result) => {
      console.log(result.data);
      const rimId = result.data.rimId;
      if(!rimId){
        return;
      }
      rimInfo = {...rimInfo, rimId};
      console.log(rimInfo)
      var data = [...this.state.data];
      data.push(rimInfo);
      this.setState({data: data});
    })
    .catch((error) => {
      console.log(error);
    });
}

handleSearch = (searchField, searchValue) => {
  console.log("search", searchField, searchValue);
  if(searchField === 'select'){
    searchField = "";
    searchValue = "";
  }
  let url = "http://localhost:9000/Dashboard/GetRims";
  if(searchField && searchValue){
    url = url + "?field=" + searchField + "&search=" + searchValue
  }
  axios.get(url).then(result => {
    const data = result.data;
    this.setState({ data: data.Rims });
  }).catch(error => {
    console.log(error);
  }
  )
}

  render() {
    return (

      <div id="Rim-table">
        <AddButtonForm  searchOptions={this.rimHeaders} formFields={this.rimHeadersEdit} onFormSubmit={this.addRim} handleSearch={this.handleSearch}/>
        <Table tableName="Fælge ID#" data={this.state.data} headers={this.rimHeaders} editHeaders={this.rimHeadersEdit} deleteFun={this.deleteRim} editFun={ this.editRim}/>
      </div>
    );
  }
}

export default RimTable;
