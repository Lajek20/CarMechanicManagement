import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'react-bootstrap';
import AddForm from './AddForm';
import SearchbarComponent from './SearchbarComponent';

class AddButtonForm extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            data: {},
            selectedSearchOption: "select",
            searchInputValue: ""
        }
    }

    componentDidMount() {
        this.setState({ data: this.createStateBasedOnProps() });
    }

    createStateBasedOnProps = () => {
        var obj = {};
        this.props.formFields.map(field => {
            obj = { ...obj, [field]: "" };
        });
        return obj;
    }

    handleOnChange = (event) => {
        const fieldName = event.target.name;
        let fieldValue;
        if (fieldName !== "admin") {
            fieldValue = event.target.value;
        } else {
            fieldValue = event.target.checked;
        }
        var data = { ...this.state.data };
        data[fieldName] = fieldValue;

        this.setState({ data: data });
    }

    handleSearchOptionChange = (value) => {
        console.log(value);
        this.setState({ selectedSearchOption: value });
    }

    handleSearchInputChange = (event) => {
        this.setState({ searchInputValue: event.target.value });
    }

    handleReset = () =>{
        this.setState({ selectedSearchOption: "select", searchInputValue: "" }, () => {
            this.props.handleSearch(this.state.selectedSearchOption, this.state.searchInputValue);
        });

    }

    handleModal = () => {
        this.setState((prevState) => ({
            show: !prevState.show
        }));

    }

    handleClose = () => {
        this.setState({ show: false });
    }
    render() {
        console.log(this.state);
        return (
            <div style={ {display: 'flex'}}>
                <Button onClick={() => { this.handleModal() }}> Tilføj</Button>
                <SearchbarComponent selectedSearchOption={this.state.selectedSearchOption} searchInputValue={ this.state.searchInputValue} searchOptions={this.props.searchOptions} handleSearchOptionChange={this.handleSearchOptionChange} handleSearchInputChange={this.handleSearchInputChange} handleSearch={() => this.props.handleSearch(this.state.selectedSearchOption, this.state.searchInputValue)} handleReset={this.handleReset}/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton> <h1>Tilføj</h1></Modal.Header>
                    <ModalBody>

                        <AddForm formFields={this.props.formFields} handleOnChange={this.handleOnChange} />

                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={() => { this.props.onFormSubmit(this.state.data); this.handleClose(); }} as="input" type="submit" value="Submit" />{' '}
                        <Button onClick={this.handleClose}> Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );

    }

}

export default AddButtonForm;

