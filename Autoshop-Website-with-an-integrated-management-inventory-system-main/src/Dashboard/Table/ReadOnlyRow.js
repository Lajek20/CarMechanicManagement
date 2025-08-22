import { MdModeEdit, MdDelete } from 'react-icons/md';

const ReadOnlyRow = (props) => {
  console.log(props);
  return (
    /* {props.data && props.data.map((item, i) => { */
    <tr> {props.headers.map(keyName => <td>{props.data[keyName].toString()}</td>)}
     {props.actionsEnabled === undefined || props.actionsEnabled === true ?
      <td>
        <div id="actions">
          <MdModeEdit onClick={() => props.onEditClick(props.number)} fontSize="1.5em" style={{ margin: "4px", cursor: "pointer" }} />
          <MdDelete onClick={() => props.onDeleteClick(props.data.tireId || props.data.rimId || props.data.userId)} fontSize="1.5em" style={{ margin: "4px", cursor: "pointer" }} />
        </div>
      </td>: null}
    </tr>
  );
}


export default ReadOnlyRow