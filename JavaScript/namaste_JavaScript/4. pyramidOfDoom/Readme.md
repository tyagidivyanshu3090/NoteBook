# callback and pyramid of doom [ Callback hell ]

- A callback in JavaScript is simply a function that you pass as an argument to another function, to be “called back” (i.e. executed) at a later time—either synchronously or asynchronously.

  - It is majorily used
    - Decoupling: Let one piece of code decide when and how to invoke another.
    - Asynchrony: Schedule work to happen after I/O, timers, or user events

- ## Problem with the callBack function:

  - Inversion of control
  - Pyramid of doom

- ## Promise api
  - `script5.js`: Promise.all([])
