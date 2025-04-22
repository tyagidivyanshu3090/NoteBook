// ! Basic example of destructuring -> which is index based in array
const firstName = ["Divyanshu", "Navjot", "Ayushi"];

const [student1, student2, student3] = firstName; //* Index based destructuring
console.log(student1); // Divyanshu
console.log(student2); // Navjot
console.log(student3); // Ayushi

// ! Input data
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Extracting the value of categories [ Italian and Pizzeria ] using destructuring
const [first, second] = restaurant.categories;
console.log(first); // Italian
console.log(second); // Pizzeria

// ! Default Destructuring
//*  Default Destructuring: Mainly useful if we have fallBack value
function getUserPreference() {
  return ["Dark Mode"];
}

const [theme, language = "English"] = getUserPreference();
console.log("the theme is ", theme, " & langauge is ", language); //  the theme is  Dark Mode  & langauge is  English
