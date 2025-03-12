 // Creating a React element (h1 tag) using React.createElement
 /*
    * React.createElement is used to create a React element (virtual DOM node).
    * The function takes three arguments:
        * Tag Name → "h1" → This specifies the type of HTML element to create.
        * Props (Attributes) → {} → Empty object means no attributes like className, id, etc.
        * Children (Content) → "Hello world from React" → The text inside the <h1> element.
 */
 const heading = React.createElement("h1", {id: "heading"}, "Hello world from React");

 // ! If we console.log -> the heading variable. we will not get the html element rather react element which is nothing but javaScript object 
 console.log(heading);
        


 // Selecting the root container where React will render the element -> this is job of reactDOM not the react
 const root = ReactDOM.createRoot(document.getElementById('root'));
 // ! How?
 // * document.getElementById('root') selects the <div> in the HTML.
 // * ReactDOM.createRoot(...) creates a React root where components will be rendered.



 // Rendering the React element inside the root container
 root.render(heading);

 // ! Render function?
 // * This renders the React element (heading) inside the root container (#root). The virtual DOM (heading) is converted into an actual DOM element and displayed in the browser.