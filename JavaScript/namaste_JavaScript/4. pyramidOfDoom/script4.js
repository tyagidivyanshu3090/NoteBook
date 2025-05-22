const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise
  .then((orderId) => {
    console.log(`generated OrderId is ${orderId}`);
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log("Payment successful:", paymentInfo);
  })
  .catch((err) => console.log(err));

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length > 0) resolve("ORDER_Id_0442");
    else reject("cart is not valid");
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const paymentSuccessful = true; // Simulate payment outcome

      if (paymentSuccessful) {
        const paymentInfo = { status: "success", transactionId: "TRANS123" };
        resolve(paymentInfo);
      } else {
        const error = "Payment failed.";
        reject(error);
      }
    }, 2000);
  });
}
