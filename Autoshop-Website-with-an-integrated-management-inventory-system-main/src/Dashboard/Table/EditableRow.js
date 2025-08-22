import React, { Fragment } from "react";
import { MdSave, MdClose } from 'react-icons/md';

class EditableRow extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount() {
    this.setState(this.createStateBasedOnHeaders());
  }

  createStateBasedOnHeaders = () => {
    var obj = {};
    this.props.headers.map(header => {
      obj = { ...obj, [header]: this.props.data[header] };
    });
    return obj;
  }

  render() {
    console.log(this.props.data);
    return (
      <Fragment>
        <tr>
          <td>
            {this.props.data.rimId || this.props.data.tireId || this.props.data.userId}
          </td>
          {this.props.headers.map(header => (<td>
            <input
              type="text"
              required="required"
              placeholder={"Enter a " + header + "..."}
              name={header}
              onChange={this.handleInputChange}
              value={this.state[header]}
            />
          </td>))}
          <td>
            <div id="actions">
              <MdSave fontSize="1.5em" onClick={() => { this.props.editFun({ ...this.state, tireId: this.props.data.tireId, rimId: this.props.data.rimId , userId: this.props.data.userId}); this.props.onCancelClick(); } } style={{ margin: "4px", cursor: "pointer" }} />
              <MdClose fontSize="1.5em" onClick={this.props.onCancelClick} style={{ margin: "4px", cursor: "pointer" }} />
            </div>
          </td>
        </tr>
      </Fragment >);
  }
}

export default EditableRow;
