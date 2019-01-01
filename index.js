var axios = require("axios");

exports.IsUsingNetlify = function(url, cb, ch) {
  axios(url, { method: "HEAD", mode: "no-cors" })
    .then(res => {
      if (res.headers.server.includes("Netlify")) {
        cb(true);
      } else {
        cb(false);
      }
    })
    .catch(error => ch(error));
};
