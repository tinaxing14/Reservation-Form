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
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
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
        Number(value) < 0 ? "must have more than one guest" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validateForm = (form0bj) => {
      let valid = true;
      Object.values(form0bj).forEach((item) => {
        if (item.length > 0) {
          valid = false;
        }
      });
      return valid;
    };
    if (validateForm(this.state.errors)) {
      this.props.handleInsert(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label class="text-sm uppercase text-grey-darkest">
          First Name
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            placeholder="Please enter name"
          />
        </label>
        {this.state.errors.firstName.length > 0 && (
          <span class="text-red-500 text-xs italic">
            {this.state.errors.firstName}
          </span>
        )}
        <br />
        <label class="text-sm uppercase text-grey-darkest">
          Last Name
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="firstName"
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleInputChange}
            placeholder="Please enter name"
          />
        </label>
        {this.state.errors.lastName.length > 0 && (
          <span class="text-red-500 text-xs italic">
            {this.state.errors.lastName}
          </span>
        )}
        <br />
        {}
        <label class="text-sm uppercase text-grey-darkest">
          Email Address
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="emailAddress"
            type="text"
            value={this.state.emailAddress}
            onChange={this.handleInputChange}
            placeholder="Please enter email"
          />
        </label>
        {this.state.errors.emailAddress.length > 0 && (
          <span class="text-red-500 text-xs italic">
            {this.state.errors.emailAddress}
          </span>
        )}
        <br />
        <label class="text-sm uppercase text-grey-darkest">
          Number of guests
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
            placeholder="Please enter a number"
          />
        </label>
        <button class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
          Submit
        </button>
      </form>
    );
  }
}

export default Reservation;
