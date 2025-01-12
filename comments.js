// create web server
const express = require('express');
const app = express();

// create web server
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  res.json(comment);
});

// start server
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});
