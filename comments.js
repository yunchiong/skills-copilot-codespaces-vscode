// create web server
const express = require('express');
const app = express();
const port = 3000;

// import comments data
const comments = require('./comments.json');
