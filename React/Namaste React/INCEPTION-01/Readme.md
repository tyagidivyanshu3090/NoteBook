# Commit 1: index.html file

## Introduction
- This is a simple HTML and JavaScript project that demonstrates how to dynamically create and insert elements into the DOM using vanilla JavaScript. 

## Project Structure
The project consists of a single HTML file with embedded JavaScript.

## Note:
- The `<body>` contains a `<div>` element with the id="root", which serves as the container where JavaScript will insert content dynamically.
- Inside the `<script> tag:`
    - A new h1 element is created using document.createElement('h1').
    - The text content of the h1 element is set using innerHTML.
    - The document.getElementById('root') selects the div with id="root".
    - The newly created h1 element is appended to the root div using appendChild.

## Notes:
- `document.createElement('h1')`: This method creates a new HTML element (`<h1>` in this case) but does not add it to the page yet.
- `document.getElementById('root')`: This method selects the element with the specified id.
- `innerHTML`: This property allows you to set or get the HTML content inside an element.
- `appendChild()`: This method adds a newly created element as a child to an existing element in the DOM.
