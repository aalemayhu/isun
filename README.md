# ![isun - Is Using Netlify?](./logo.png)

[![Build Status](https://travis-ci.org/scanf/isun.svg?branch=master)](https://travis-ci.org/scanf/isun) [![npm version](https://badge.fury.io/js/%40scanf%2Fisun.svg)](https://badge.fury.io/js/%40scanf%2Fisun)

Check if a website is using Netlify by reading the HTTP server header field.

## Installation

    npm install --save @scanf/isun

## Usage as module

```js
const url = "https://jamstack.xdp.no/";

require("@scanf/isun").IsUsingNetlify(url, isun => {
  assert.equal(true, isun);
});
```

## Usage as Lambda function on Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/scanf/isun)

Assuming you have deployed on Netlify and your domain is `example.xyz`, the below should work:

```js
curl https://example.xyz/isun?url=https://google.com
```

The function expects you to set the query parameter `url` and be compliant with [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt). Or simply put pass
a valid url and remember to include `https://` prefix :wink:

## LICENSE

The project uses a GPL-3.0 licenses for all files unless otherwise specified.

The project logo was created using the awesome [logo-maker](https://logo-maker.egoist.sh/) from [egoist/logo-maker](https://github.com/egoist/logo-maker).
