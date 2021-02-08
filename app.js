const fs = require('fs');


// NOTE: Handle error stacks.
module.exports = function catchError(timeStamp, message, err) {
    var errLog = './error-logs';
    var fileName = 'log';
    var errorMessage = `${timeStamp} --> ${message}, \n ${err}`;
    console.error(errorHandling.errMsg.underline.red);
    if (!fs.existsSync(errLog)) {
      fs.mkdirSync(errLog);
    }
    fs.appendFile(`${errLog}/${fileName}.txt`, errorMessage, 'utf8', function(err) {
      if (err) {
        console.log('error!! -->'.underline.red, err);
      }
    });
  }
