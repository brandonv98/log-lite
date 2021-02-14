# Error Logging Lite
Light weight error handler package library

### Install
Use the package manager [npm](https://npmjs.com) to install foobar.

1. Configure project `.npmrc` file by appending the following into the file.
- `registry=https://npm.pkg.github.com/brandonv98`

```bash
$ npm install @brandonv98/log-lite@1.0.0
```

*Install via package.json:*
```"@brandonv98/log-lite": "1.0.0"```


### Usage
```js
const logLite = require('log-lite');

logLite('Error message', 'errorStack', 'timeStamps'); 
// return error messege, then create error dir & file("error-log"); appends error message, stack trace, and timestamps to file. 
```

### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

#### License
- MIT [License](./license)
