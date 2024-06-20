# Bytewise_Fellowship (React & Next.js)
## Week 02 TASKS (20/06/24 - ?/06/24)

### Day 01
## Task 01 - Learn about state and lifecycle in React & Learn the difference between local and global state

In this task I learned about: <br>

## States
- local state of a component
- used to manage data that may change over time

  **Key characteristics of state:**

    - **Mutable:** State can be updated and modified using `setState`.
    - **Local to Component:** Each component manages its own state, making components self-contained and reusable.
    - **Initialization:** State is typically initialized in the constructor of class components or using the useState hook in functional                                components.
      
      (Unlike **props**, which are passed down from parent components and are immutable within the component, state can be updated using           the setState method provided by React.)
      
**Difference in using state in Functional and class based components**
1. Functional Component:

- <i>Syntax:</i> State is managed using array destructuring.
- <i>Initialization:</i> State variables can be initialized directly within the `useState` call

***Example***
```
import React, { useState } from 'react';  //syntax

function Counter() {
  const [count, setCount] = useState(0);  //initialization

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

2. Class Component:

- <i>Syntax:</i> State is managed using the `this.state` object and updated using `this.setState()` method.
- <i>Initialization:</i> State variables are initialized in the `constructor` of the class.
  
***Example***
  ```
import React, { Component } from 'react';      //syntax

class Counter extends Component {
  constructor(props) {      //initalization
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>      //use of this.state
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>    //Access and Update
          Click me
        </button>
      </div>
    );
  }
}
```
## Life Cycle in React  

- methods allow you to execute code at specific stages in a component's life., from initialization to destruction.

1. **Class Component:**
   
   - <i>Mounting:</i> <br>
     this method is called when an instance of a component is being created and inserted into the DOM:
      - constructor()
      - render()
      - componentDidMount()
        
   - <i>Updating:</i> <br>
     this method is called when a component is being re-rendered as a result of changes to either its props or state:
      - shouldComponentUpdate()
      - render()
      - componentDidUpdate()
        
   - <i>Unmounting:</i> <br>
     this method is called when a component is being removed from the DOM:
     - componentWillUnmount()
    
2. **Functional Component:**
   
   - we can use `useEffect` hook to achieve similar effects as lifecycle methods in class components.

## Difference between local and global state

1. **Local State**:
   - state that is managed within a single component.
   - It is private to that component and cannot be accessed or modified by other components directly.

     **Characteristics:**

      - **Scope:** Limited to the component where it is defined.
      - **Access:** Accessed using `useState` or `this.state` (for class components).
      - **Updates:** Updated using `setState` or the function form of useState.
      - **Usage:** Ideal for data that is only relevant to the specific component and does not need to be shared with other components.

1. **Global State**:
   -accessible to and can be modified by multiple components across the application.
   - It allows sharing data between components that are not directly connected via parent-child relationships.
  
      **Characteristics:**

      - **Scope:** Can be accessed from multiple components across the application
      - **Access:** Managed by state management tools like React Context, Redux, or custom global state solutions.
      - **Updates:** Updated via `actions` or `reducers` (in Redux) or by modifying the context provider (in React Context)
      - **Usage:** Useful when multiple components need access to the same data or when the state needs to be shared across different             parts of the application
        
