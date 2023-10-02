### Middleware

use keyword is used to add the middleware , bodyparser is used to parse the body.

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.

A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).

### morgan

HTTP request logger middleware for node.js
next() method is used to transfer to the next middleware
