var https = require('https');
var util = require('util');
var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
  console.log('event:\n', JSON.stringify(event));
};