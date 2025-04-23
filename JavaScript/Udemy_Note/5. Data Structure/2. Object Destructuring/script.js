//  ? Basic Object Destructuring

const restaurant = {
  name: "Classico Italiano",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  openingHours: {
    fri: { open: 11, close: 23 },
    sat: { open: 12, close: 24 },
  },
};

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

//?  Setting Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu); // [] (default value because 'menu' doesn't exist)
// console.log(starters); // Undefined unless `starterMenu` exists in restaurant

// ? Nested Object Destructuring
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close); // 11 23

// // With variable renaming
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c); // 11 23
