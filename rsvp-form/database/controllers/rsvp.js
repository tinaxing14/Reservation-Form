const Rsvp = require('../models/rsvp.js');

const findRsvpAndUpdate = (data, callback) => {
  Rsvp.findOneAndUpdate(data, data, (err, result) => {
    if (err) {
      callback(err);
    } else {
      if(result === null) {
        Rsvp.save(data, (err, result) => {
          if(err) {
            callback(err);
          } else {
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
