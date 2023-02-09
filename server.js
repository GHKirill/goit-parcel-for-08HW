//console.log('Hi it is probe');
const Joi = require('joi');
const shortId = require('shortid');
const passwordSchema = Joi.string().min(3).max(7).alphanum();
const express = require('express');

const app = express();
app.use('*', (req, res) => {
  console.log('Requiring from browser');
  res.send(`<h1>First expierence</h1>`);
});

const listener = app.listen(4444, () => {
  console.log(`WEB-server ${listener.address().port}`);
});

//console.log(passwordSchema.validate('h56eR'));
//console.log(shortId.generate());
