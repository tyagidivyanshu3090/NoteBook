"use strict";

const bookings = [];

function createBooking(flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

// Call with different scenarios
createBooking("LH123"); // uses defaults
createBooking("LH124", 2); // custom passengers, default price
createBooking("LH125", 5, 800); // all custom
