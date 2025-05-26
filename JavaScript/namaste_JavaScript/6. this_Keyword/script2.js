// ? value of this in strict mode

"use strict";

function juicer() {
  console.log(this);
}

window.juicer(); // * window object
juicer(); // * undefined

//? calling this as the Method of object

const obj = {
  a: 10,
  show() {
    console.log(this); // obj
    console.log(this.a); // 10
  },
};

obj.show();
