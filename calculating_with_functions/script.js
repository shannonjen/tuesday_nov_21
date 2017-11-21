/*
This time we want to write calculations using
functions and get the results. Let's have a look at some examples:
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following
mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand,
the most inner function represents the right operand
*/

function zero() {}
function one() {}
function two() {}
function three(func) {
  if (func){
    return func(3)
  } else {
    return 3
  }
}
function four(func) {
  return func ? func(4) : 4;
}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus(num) {
  return function(num2) {
    return num + num2
  }
}
function minus() {}
function times() {}
function dividedBy() {}

three(plus(four()));
