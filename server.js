const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const environment = process.env.NODE_ENV || 'development';
// const configuration = require('../knexfile')[environment];
// // const database = require('knex')(configuration);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3001);

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/index.html'));
});




app.listen(app.get('port'), () => {
    console.log('Server is running on port 3001.');
});
