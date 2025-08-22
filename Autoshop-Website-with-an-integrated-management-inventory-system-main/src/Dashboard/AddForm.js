import "./AddForm.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { render } from "@testing-library/react";
import axios from "axios";
class AddForm extends React.Component {
  render() {
    return (
      <div id="AddForm">
        <form>
          {this.props.formFields.map(field => <div>
            <span>{field}: </span>
            {field !== "admin" ? <input
              type="text"
              name={field}
              required="required"
              placeholder={"Enter " + field}
              onChange={this.props.handleOnChange}
            /> :
              <input type="checkbox" name={field} onChange={this.props.handleOnChange} />
            }

          </div>)}
        </form>
      </div>
    );
  }
};
export default AddForm;
