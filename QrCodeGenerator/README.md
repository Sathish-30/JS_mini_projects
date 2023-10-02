### QR Code Generator

The QR code is generated with the help of qr-image npm package which contains the information about the URL given a input from the command line interface , which has been implemented using the inquirer npm package.

### inquirer package

- The inquirer is a object which has a prompt method which consists of array question , where each question is a object with a message(question) field and the name field which helps in getting answer. where it returns a promise , it can be resolved for rejected.

- If resolved use (then) keyword to acquire the answer with the help of name which has been given as a field in question , if not use catch keyword to catch the error.

### qr-image package

- generate image in png, svg, eps and pdf formats.

- qr.image(text, [ec_level | options]) — Readable stream with image data , return image data with readable stream

- where the returned data is send to a pipe where it has been saved to a image format
