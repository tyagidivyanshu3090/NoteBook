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
  - `script6.js`: Promise.allSettled([])
  - `script7.js`: Promise.race([])
  - `script8.js`: Promise.any([])

# 🧐 Notes:

- `Promise.all(promises)`: Waits for all promises to resolve. Resolves with an array of their results. Rejects immediately if any promise rejects. "All or nothing."
- `Promise.allSettled(promises)`: Waits for all promises to settle (resolve or reject). Resolves with an array of objects describing the outcome of each promise ({ status: 'fulfilled' | 'rejected', value?: any, reason?: any }). Never rejects.
- `Promise.race(promises)`: Settles (resolves or rejects) as soon as the first promise in the iterable settles. Returns the result/reason of that first settled promise.
- `Promise.any(promises)`: Resolves with the result of the first promise that resolves. Rejects with an AggregateError if all promises reject. "First to succeed."
