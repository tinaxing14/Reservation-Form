import React from "react";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress:'',
      numberOfGuests: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    this.props.handleInsert(this.state)
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          First Name
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Email Address
          <input
            name="emailAddress"
            type="text"
            value={this.state.emailAddress}
            onChange={this.handleInputChange}
          />
        </label>
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
