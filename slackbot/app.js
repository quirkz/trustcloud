var https = require('https');
var util = require('util');
var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
  console.log('event:\n', JSON.stringify(event));
  var data = JSON.parse(event.Records[0].Sns.Message);
  console.log('data:\n', JSON.stringify(data));
  var postData = {
    'channel': data.channel,
    'username': data.username,
    'text': data.message,
    'icon_emoji': ':' + data.icon + ':'
  };
  console.log('postData:\n', JSON.stringify(postData));
  var payload = 'payload=' + util.format('%j', postData);
  var options = {
      method: 'POST',
      hostname: 'hooks.slack.com',
      port: 443,
      path: '/services/<your suffix>',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(payload)
    }
  };
  var req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('end', function () {
      context.done(null);
    });
  });
  req.on('error', function(e) {
    console.log('Error: ' + e.message);
  });
  req.write(payload);
};