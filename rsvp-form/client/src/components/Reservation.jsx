import React from "react";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      emailAddress: null,
      numberOfGuests: null,
      errors: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        numberOfGuests: "",
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 2 ? "first name must be 2 characters long!" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 2 ? "last name must be 2 characters long!" : "";
        break;
      case "emailAddress":
        errors.emailAddress = validEmailRegex.test(value)
          ? ""
          : "email is not valid";
        break;
      case "numberOfGuests":
        Number(value) < 0
        ? "must have more than one guest"
        : "";
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value,}, () => {
      console.log(errors)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validateForm = (form0bj) => {
      let valid = true;
      Object.values(form0bj).forEach((item) => {
        if(item.length > 0){
          valid = false
        }
      })
      return valid;
    }
    if(validateForm(this.state.errors)){
      this.props.handleInsert(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        {this.state.errors.firstName.length > 0 && <span>{this.state.errors.firstName}</span>}
        <br/>
        <label>
          Last Name
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        {this.state.errors.lastName.length > 0 && <span>{this.state.errors.lastName}</span>}
        <br />
        {}
        <label>
          Email Address
          <input
            name="emailAddress"
            type="text"
            value={this.state.emailAddress}
            onChange={this.handleInputChange}
          />
        </label>
        {this.state.errors.emailAddress.length > 0 && <span>{this.state.errors.emailAddress}</span>}
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default Reservation;
