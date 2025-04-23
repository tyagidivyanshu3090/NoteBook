//  ? Basic Object Destructuring

// const restaurant = {
//   name: "Classico Italiano",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   openingHours: {
//     fri: { open: 11, close: 23 },
//     sat: { open: 12, close: 24 },
//   },
// };

// const { name, categories, openingHours } = restaurant;
// console.log(name); // 'Classico Italiano'
// console.log(categories); // ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// console.log(openingHours); // { fri: {...}, sat: {...} }

// ?  Destructuring with Renaming
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName); // 'Classico Italiano'
// console.log(hours); // { fri: {...}, sat: {...} }
// console.log(tags); // ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
