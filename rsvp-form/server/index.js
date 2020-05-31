const express = require('express');
const bodyParser = require('body-parser');
const findRsvpAndUpdate = require('../database/controllers/rsvp.js')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/rsvps', (req, res) => {
  findRsvpAndUpdate(req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.status(200).json(result)
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
