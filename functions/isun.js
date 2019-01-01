var { IsUsingNetlify } = require("../index");
var validUrl = require("valid-url");

exports.handler = function(event, context, callback) {
  const url = event.queryStringParameters.url;

  if (!validUrl.isUri(url)) {
    callback(null, { statusCode: 400, body: `invalid url: ${url}` });
    return;
  }

  IsUsingNetlify(url, isun => {
    callback(null, {
      statusCode: 200,
      body: `${isun}`
    });
  });
};
