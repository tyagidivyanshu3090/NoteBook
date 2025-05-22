// function onDone() {
//   console.log("All done!");
// }

// // You hand over control to setTimeout:
// setTimeout(onDone, 1000);
// // You no longer decide *when* onDone() runs—setTimeout does.

// * Unit 2 creating the promise

const cart = ["apple", "Mango", "shampoo"];

const promise = createOrder(cart);
console.log(promise); // logging the promise state to check whether is pending or fulfiled state
// .then method is called on the promise when it is populated with data or promise is fulfilled by createOrder function
promise
  .then((orderId) => {
    // proceedToPayment(orderId);
    console.log(orderId);
  })
  .then((orderId) => {
    proceedToPayment(orderId);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err.message));

/*
  1. now createOrder function must return a promise -> to create promise we use Promise constructor
  2. the  Promise constructor executor function which has the resolve and reject function as param
  3. the resolve and reject are the function provided by the javaScript
  4. if logic/functionality fails inside the promise -> we return the reject function other we return the resolve function 
*/
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (cart.length) {
        setTimeout(() => {
          resolve("ORDER_Id_123");
        }, 6000);
        // if cart is valid we make a db call and return the orderID. for time being keeping ID const
      } else {
        //
        const err = new Error("Cart is not valid or empty");
        reject(err);
      }
    }, 500);
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment is done");
  });
}
