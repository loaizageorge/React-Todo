var moment = require('moment');

console.log(moment().format());

var now = moment();
// Unix => time stamp (time in seconds since Jan 1, 1970)
console.log('Current timestamp',now.unix());

var timestamp = 1459111648;

var currentMoment = moment.unix(timestamp);
console.log('Current moment',currentMoment.format("MMM D,YY @h:mm a"));

console.log('Current moment',currentMoment.format("MMMM Do,YYYY @h:mm A"));
