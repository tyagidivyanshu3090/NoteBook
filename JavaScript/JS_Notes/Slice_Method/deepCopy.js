// 1. Deep copy using JSON.parse and JSON.stringify

let array = [1, 2, { name: "Gemini" }, 4, 5];
let deepCopy = JSON.parse(JSON.stringify(array));

deepCopy[0] = "Updated";
deepCopy[1] = { name: "Updated" };
console.log(array); // [1, 2, { name: 'Gemini' }, 4, 5]
console.log(deepCopy); // [ 'Updated', { name: 'Updated' }, { name: 'Gemini' }, 4, 5 ]








