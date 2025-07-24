# Methods to add css in the project

- External styling sheet
- Sass: Syntactically awesome styling sheet [ Not recommended ]
- styled component way to write css [ Used in Uber ]
- Material UI/Bootstrap/Chakra etc
- Tailwind: Rapidly building the application without leaving html code

## what is postcssrc?

- PostCSS, a powerful tool that transforms CSS with JavaScript plugins.
  **PostCSS: The CSS Transformation Engine (using JS Plugins)**

**What is it?**

- **Tool** for **transforming CSS** using **JavaScript plugins**.
- Acts as a **processing pipeline** for your CSS.
- Takes CSS -> parses to **AST** (Abstract Syntax Tree) -> plugins modify AST -> generates new CSS.

# Pseudo-class/element:

- In CSS, : (a single colon) is used to denote a pseudo-class or a pseudo-element.
- A pseudo-class is used to define a special state of an element. It allows you to style an element when it's in a particular condition, without adding a new class to your HTML.
  - Example: :hover: Styles an element when the user's mouse pointer is over it.

```css
a:hover {
  color: blue;
}
```

- :focus: Styles an element when it has received focus (e.g., an input field selected by tabbing).

```css
input:focus {
  border: 2px solid blue;
}
```

## Psuedo Element

- :: (double colon): The modern and recommended way to denote pseudo-elements, which target a specific part of an element.

```css
::selection {
  background-color: yellow;
  color: black;
}
```
