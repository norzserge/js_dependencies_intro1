const moment = require("moment"); // import moment from 'moment';
// below is an alternative solution from video: console.log(moment().format("DD/MM/YYYY HH:mm"));
moment.locale("en-gb");
console.log(moment().format("L") + " " + moment().format("LT"));
