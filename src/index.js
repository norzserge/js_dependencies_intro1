const moment = require("moment"); // import moment from 'moment';
moment.locale("en-gb");
console.log(moment().format("L") + " " + moment().format("LT"));
// console.log(moment().format("DD/MM/YYYY HH:mm"));
