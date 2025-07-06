# Talk is Cheap: Developing Food ordering Application

## What we have learned

- **Understanding the folder Structure in React**
  - Feature-Based vs Type-Based Folder Structure
- **Difference btw jsx and js extension**
- **Default and named export/import**
- **Use of Utils folder**: use to keep the mockData, hardCoded url like in image tag which use cloudinary image etc, helperFunction [ fetchData.js, ]
- **Understanding the Hooks**

## What we have done

- Restructuring the application. i.e. creating separate file for each component liker Header, body, Restaurant Card etc
- In React, component names should always follow PascalCase convention. [ No underscores or hyphens. ]
- always export the component first and then import the component. It is a good practice

## Utils folder follow camelCase

- Files in the utils folder usually contain utility functions, helpers, or plain JavaScript logic.
- These are not React components hence follow the camelCase convention rather pascal convention.
  - apiHelper.js, formatDate.js, calculateTax.js, fetchData.js

## Hooks in react

- In the application we are building a filter button such that on click of it -> we show all the restaurant which have rating > 4.0
