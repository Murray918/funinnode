console.log('hello world')

const moment = require('moment');
const chalk = require('chalk')
moment().format();
// let now = moment()
// console.log(now);
// let day = moment("1995-12-25")
// console.log(day);
// let dayOYear = moment(DDD DDDD)
// console.log(dayOYear);
// let year = moment(gggg)
let now = moment();
let dateTime = now.format('"dddd, MMMM Do YYYY, h:mm:ss a"');
let dayOYear = now.format('DDD')
let dayLight = '';
let leapYear = '';
let seconds = now.diff(moment().hour(00).minute(0).second(0), 'seconds')

if (now.isDST()){
  dayLight = 'It is'
}else{
  dayLight = 'It is not'
}
if (now.isLeapYear()){
  leapYear = 'It is'
} else {
  leapYear = 'It is not'
}





console.log(`It is ${chalk.blue(dateTime)}`);
console.log(`It is ${chalk.magenta(dayOYear)} day of the year`);
console.log(`It is ${chalk.cyan(seconds)} into the day.`);
console.log(`${chalk.green(dayLight)} day light savings time.`)
console.log(`${chalk.red(leapYear)} a leap year.`);
