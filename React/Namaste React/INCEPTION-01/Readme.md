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



# Commit 2: index1.html file

## Introduction
- Populating the UI using the react not javaScript
- To get react into the project we have used `CDN : Content delivery network`
    - A Content Delivery Network (CDN) is a system of distributed servers that work together to deliver web content (like images, videos, scripts, and stylesheets) to users based on their geographic location. The goal of a CDN is to reduce latency and improve website load times by caching content on multiple servers worldwide.

## Project Structure
- The project consists of a single HTML file with embedded React inside the script tag.

## Notes:
- React is injected using two script tags that load react.development.js and react-dom.development.js from the unpkg CDN.
- Inside the `<script>` tag:
    - A new React element `(<h1>)` is created using React.createElement which takes 3 parameter -> tag name, Props and content.
    - The ReactDOM.createRoot(document.getElementById('root')) initializes React inside the root div.- The root.render(heading) method renders the created element inside the root div.


