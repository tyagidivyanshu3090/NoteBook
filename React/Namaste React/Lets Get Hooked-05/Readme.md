# Talk is Cheap: Developing Food ordering Application

## What we have learned

- **Understanding the folder Structure in React**
  - Feature-Based vs Type-Based Folder Structure
- **Difference btw jsx and js extension**
- **Default and named export/import**
- **Use of Utils folder**: use to keep the mockData, hardCoded url like in image tag which use cloudinary image etc, helperFunction [ fetchData.js, ]
- **Understanding the Hooks**
- **Virtual DOM and diffing algorithm**
- **React Fiber aka reconciliation algorithm**

## What we have done

- Restructuring the application. i.e. creating separate file for each component liker Header, body, Restaurant Card etc
- In React, component names should always follow PascalCase convention. [ No underscores or hyphens. ]
- always export the component first and then import the component. It is a good practice

## Utils folder follow camelCase

- Files in the utils folder usually contain utility functions, helpers, or plain JavaScript logic.
- These are not React components hence follow the camelCase convention rather pascal convention.
  - apiHelper.js, formatDate.js, calculateTax.js, fetchData.js
  - Move hardcoded values (e.g., URLs, static data) out of component files.

## Hooks in react

- In the application we are building a filter button such that on click of it -> we show all the restaurant which have rating > 4.0.
  - To implement this functionality we have to use the react state Variable [ dynamically update the list of restaurants ]

### How does it work?

- ✅ Initially, all restaurants are displayed because restaurantList is initialized with resData.
- ✅ When we click "Top Rated Restaurants": The handleTopRated function is called. It filters the original data to include only restaurants with avgRating > 4.5.
- setRestaurantList(topRatedRestaurants) updates the state with this new filtered list.
- The component re-renders, and RestaurantCard receives the updated list as a prop.
