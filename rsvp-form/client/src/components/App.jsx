import React from 'react';
import $ from 'jquery';
import Reservation from './Reservation.jsx';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvp: {
        firstName: 'test',
        guests: 'test',
        email: 'test'
      }
    }
    this.handleInsert = this.handleInsert.bind(this);
  }

  handleInsert(userinfo) {
    axios.post('/rsvps', userinfo)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return(
      <div>
        <h1>Reservation Form</h1>
        <Reservation handleInsert={this.handleInsert} />
      </div>
    )
  }
}

export default App;
