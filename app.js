const fs = require('fs');
const moment = require('moment');

// NOTE: Handle error stacks & messages.
module.exports = function catchError(message, errorStack) {
    const errorLog = './error-logs';
    const fileName = 'error-log';
    const errorTime = moment().format('YYYY-MM-DD');
    const errorMessage = `$\n Error: ${message},  \n Stack: ${errorStack} `;
    
    console.error(errorMessage.red);
    if (!fs.existsSync(errorLog)) {
      fs.mkdirSync(errorLog);
    }
    fs.appendFile(`${errorLog}/${fileName}.txt`, errorMessage, 'utf8', function(err) {
      if (err) {
        console.error('Error: '.red,  'Stack: ',  err, ` - ${errorTime}`);
      }
    });
  }


