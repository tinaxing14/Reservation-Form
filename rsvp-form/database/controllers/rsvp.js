const Rsvp = require('../models/rsvp.js');
const db = require('../index.js');

const findRsvpAndUpdate = (data, callback) => {
  const newReservation = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.emailAddress,
    guests:data.numberOfGuests
  }
  Rsvp.findOneAndUpdate({email: data.emailAddress}, newReservation, (err, result) => {
    if (err) {
      callback(err);
    } else {
      if(result === null) {
        const newRsvp = new Rsvp(newReservation);
        newRsvp.save(data, (err, result) => {
          if(err) {
            callback(err);
          } else {
            console.log("data saved!!")
            callback(null, result);
          }
        });
      }else {
        console.log('old data replaced', result);
        callback(null, result)
      }
    }
  })
};
module.exports = findRsvpAndUpdate;
