import "./Table.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import React, { Fragment, useState } from "react";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      editRowNumber: null
    }


  }

  setEditRowNumber = (index) => {
    this.setState({ editRowNumber: index });
  }

  resetEditRowNumber = () => {
    this.setState({ editRowNumber: null });
  }

  render() {
    return (
      <form>
        <table>
          <thead>
            <tr>
              {this.props.headers.map((header) => (
                <th>{header}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.props.data && this.props.data.map((item, index) => {
              console.log("item ", item);
              return (
                <Fragment>
                  {this.state.editRowNumber === index ? (
                    <EditableRow headers={this.props.editHeaders} data={item} editFun={this.props.editFun} onCancelClick={ this.resetEditRowNumber}/>
                  ) : (
                    <ReadOnlyRow data={item} headers={this.props.headers} number={index} onEditClick={(index) => { this.setEditRowNumber(index); }} onDeleteClick={this.props.deleteFun} actionsEnabled={localStorage.getItem("isAdmin")=== "true"}/>
                  )}

                </Fragment>);
            })
            }
          </tbody>
        </table>
      </form>
    );
  }
}

export default Table;
