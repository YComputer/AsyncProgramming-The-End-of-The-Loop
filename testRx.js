// var Rx = require('rx');

// var source = Rx.Observable.interval(400).take(9)
//     .map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);

// source.subscribe(x => console.log(x));
// // var result = source;
// // console.log(result);

var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

var result = source
  .map(x => parseInt(x))
  .filter(x => !isNaN(x))
  .reduce((x, y) => x + y);

console.log(result);