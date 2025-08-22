import axios from "axios";
import React from "react";
import AddButtonForm from "../AddButtonForm";
import Table from "../Table/Table";


class TierTable extends React.Component {
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
    this.tierHeadersEdit = [
      "type",
      "dimensions",
      "brand",
      "condition",
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
    axios.get("http://localhost:9000/Dashboard/GetTires").then(result => {
      const data = result.data;
      this.setState({ data: data.Tires });
    }).catch(error => {
      console.log(error);
    }
    )
  }

  editTire = (tireInfo) => {
    console.log("tireInfo: ", tireInfo)
    axios
      .put("http://localhost:9000/Dashboard/editTire", tireInfo
      )
      .then((result) => {
        console.log(result.data);
        var data = [...this.state.data];
        const indexOfItem = this.state.data.findIndex((item) => item.tireId === tireInfo.tireId);
        if (indexOfItem > -1) {
          data[indexOfItem] = { ...data[indexOfItem], ...tireInfo };
          this.setState({ data: data });
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteTire = (tireId) => {
    axios
      .delete("http://localhost:9000/Dashboard/DeleteTire/" + tireId)
      .then((result) => {
        console.log(result.data);
        var data = [...this.state.data];
        data = data.filter(item => item.tireId !== tireId);
        this.setState({ data: data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addTire = (tireInfo) => {
    axios
      .post("http://localhost:9000/Dashboard/addTire", tireInfo
      )
      .then((result) => {
        console.log(result.data);
        const tireId = result.data.tireId;
        if (!tireId) {
          return;
        }
        tireInfo = { ...tireInfo, tireId };
        console.log(tireInfo);
        var data = [...this.state.data];
        data.push(tireInfo);
        this.setState({ data: data });
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
    let url = "http://localhost:9000/Dashboard/GetTires";
    if(searchField && searchValue){
      url = url + "?field=" + searchField + "&search=" + searchValue
    }
    axios.get(url).then(result => {
      const data = result.data;
      this.setState({ data: data.Tires });
    }).catch(error => {
      console.log(error);
    }
    )
  }

  render() {
    return (
      <div id="Tier-table">
        <AddButtonForm searchOptions={this.tierHeaders} formFields={this.tierHeadersEdit} onFormSubmit={this.addTire} handleSearch={this.handleSearch} />
        <Table tableName="Dæk ID#" headers={this.tierHeaders} editHeaders={this.tierHeadersEdit} data={this.state.data} editFun={this.editTire} deleteFun={this.deleteTire} />
      </div>
    )
  }
}
export default TierTable;
