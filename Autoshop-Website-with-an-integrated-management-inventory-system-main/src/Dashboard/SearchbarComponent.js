
import "../Dashboard/SearchbarComponent"
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import "./SearchbarComponent.css";
export default function SearchbarComponent(props) {
  return (



    <div id="Searchbar">
      <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={props.handleSearchOptionChange} value={props.selectedSearchOption}>
        {props.searchOptions.map(option => <Dropdown.Item eventKey={option} active={ props.selectedSearchOption === option}>{option}</Dropdown.Item>)}
      </DropdownButton>
      <input placeholder="Søg"
        type="text"
        name="search"
        onChange={props.handleSearchInputChange}
        value={props.searchInputValue}
      />
      <Button onClick={props.handleSearch}>
          Søg
      </Button>
      <Button onClick={props.handleReset}>
          Reset
      </Button>
    </div>
  )
}

