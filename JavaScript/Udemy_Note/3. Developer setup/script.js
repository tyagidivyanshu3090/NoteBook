// From now onwards we are going to use the strict mode
"use strict";

// ? Commit 1: Assignment
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// *  What is temp amplitude? Answer: difference between highest and lowest temp
// *  How to compute max and min temperatures?
// * What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// ! Code
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// * Assignment 2:
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data2);
