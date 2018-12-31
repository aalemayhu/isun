var request = require("request");

exports.IsUsingNetlify = function(url, cb) {
  request(url, function(err, res) {
    if (res.headers.server.includes("Netlify")) {
      cb(true);
    } else {
      cb(false);
    }
  });
};
