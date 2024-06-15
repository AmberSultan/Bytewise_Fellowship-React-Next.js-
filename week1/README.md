# Bytewise_Fellowship (React & Next.js)
## Week 01 TASKS (10/06/24 - 15/06/24)

### Day 01
## Task 01 - Refresh HTML, CSS and Javascript.

 This includes:
- HTML: Elements, attributes, forms, semantic tags.
- CSS: Selectors, box model, flexbox, grid, animations.
- JavaScript: Variables, data types, functions, DOM manipulation, ES6 features (let, const, arrow functions, template literals, modules).

### Day 02
## Task 02 - Create React App & Setup with VS Code

This involves:
- Installing Node.js and npm.
- Using the `npx create-react-app my-app` command to create a new React project.
- Installing necessary VS Code extensions

### Day 03
## Task 03 - Learn about JSX: What it is and How We Use it in React

JSX stands for JavaScript XML. It is a syntax extension for JavaScript used with React to describe what the UI should look like.
#### JSX Syntax

```jsx
const element = <h1>Hello, world!</h1>;
```
I explore:
- How JSX makes it easier to write and add HTML in React.
  
### How JSX converts to JavaScript.
```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

### Day 04
## Task 04 - Learn about React Components: Creation, Functionality, and Hierarchy

React components are the building blocks of a React application. I focus on:
- **Creation:** Understanding class components and functional components.
- **Functionality:** Exploring state and props, component lifecycle methods, and hooks.
- **Hierarchy:** Understanding parent and child components, component tree, and how data flows in a React app.

  ### 1. Creation of Components

React components can be created in two main ways:

i. **Class Components:** These are ES6 classes that extend `React.Component` and define a `render()` method to describe the component's UI.
  
  Example of a class component:
  ```jsx
  import React, { Component } from 'react';

  class MyComponent extends Component {
    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
  }

  export default MyComponent;
  ```
  ii. **Functional Components:** These are simpler components based on JavaScript functions. Introduced in React 16.8, they use hooks like useState for managing state and are preferred for their simplicity and performance.

      Example of a class component:
```jsx
 import React from 'react';

const MyComponent = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default MyComponent;
 ```
     
 ### 2. Functionality of Components
React components provide functionality through props, state, lifecycle methods (for class components), and hooks (for functional components):

- **Props:** Allow data to be passed from a parent component to a child component. They are immutable and help make components reusable.

- **State:** Manages internal component data that can change over time. It is mutable and can be updated using setState() (class components) or useState() (functional components).

- **Lifecycle Methods (Class Components):** Methods like componentDidMount, componentDidUpdate, and componentWillUnmount allow developers to perform actions at different stages of a component's lifecycle.

**Hooks (Functional Components):** Functions like useState, useEffect, and useContext enable functional components to use state and lifecycle features without using class syntax.

 ### 3. Component Hierarchy and Data Flow
React components are structured hierarchically, forming a component tree where parent components can pass data down to their child components:

- **Parent and Child Components:** Parent components can pass props down to child components, creating a hierarchical structure.

- **Component Tree:** Represents the hierarchical structure formed by nesting components inside each other. React efficiently updates the DOM based on changes in state or props.

- **Data Flow:** Data typically flows downward from parent to child components through props. To handle data flowing upward (child to parent), pass functions as props.

