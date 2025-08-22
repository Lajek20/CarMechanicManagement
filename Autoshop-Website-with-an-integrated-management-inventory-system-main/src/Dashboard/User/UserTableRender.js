
import Table from "../Table/Table";
import React from "react";
import axios from "axios";
import AddButtonForm from "../AddButtonForm";

class UserTableRender extends React.Component {
  // Executes after the component is rendered for the first time
  constructor() {
    super();
    this.UserHeader = [
      "userId",
      "username",
      "password",
      "admin"
    ];
  this.userHeadersForm = [
      "username",
      "password",
      "admin"
    ];

    this.state = {
        data: []

      }
  }


      componentDidMount() {
        axios.get("http://localhost:9000/Dashboard/Users").then(result => {
          const data = result.data;
          console.log(data);
          this.setState({ data: data.Users });
        }).catch(error => {
          console.log(error);
        }
        )
      }

  addUser = (userObj) => {
    console.log(userObj);
    axios.post("http://localhost:9000/Dashboard/User", userObj).then(result => {
      const userId = result.data.userId;
      if(!userId){
        return;
      }
      userObj = {...userObj, userId};
      console.log(userObj);
      var data = [...this.state.data];
      data.push(userObj);
      this.setState({data: data});
    }).catch(err => { console.log(err);})
      }


      editUser=(userInfo)=>{
        console.log("userInfo: ", userInfo)
        axios
          .put("http://localhost:9000/Dashboard/editUser", userInfo
          )
          .then((result) => {
            console.log(result.data);
            var data = [...this.state.data];
            const indexOfItem = this.state.data.findIndex((item) => item.userId === userInfo.userId);
            if (indexOfItem > -1) {
              data[indexOfItem] = { ...data[indexOfItem], ...userInfo };
              this.setState({data: data});
            }

          })
          .catch((error) => {
            console.log(error);
          });

      }

    deleteUser=(userId)=>{
      axios
      .delete("http://localhost:9000/Dashboard/DeleteUser/" + userId)
      .then((result) => {
        console.log(result.data);
        var data = [...this.state.data];
        data = data.filter(item => item.userId !== userId);
        this.setState({ data: data })
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
      let url = "http://localhost:9000/Dashboard/GetAllUsers";
      if(searchField && searchValue){
        url = url + "?field=" + searchField + "&search=" + searchValue
      }
      axios.get(url).then(result => {
        const data = result.data;
        this.setState({ data: data.Users });
      }).catch(error => {
        console.log(error);
      }
      )
    }


  render() {
    return (
      <div id="User-table">
        <AddButtonForm searchOptions={this.UserHeader} formFields={this.userHeadersForm} onFormSubmit={this.addUser} handleSearch={this.handleSearch}/>
        <Table tableName="Users" data={this.state.data} headers={this.UserHeader} editHeaders={this.userHeadersForm} editFun={this.editUser} deleteFun={this.deleteUser}/>
      </div>
    );
  }
}

export default UserTableRender;
