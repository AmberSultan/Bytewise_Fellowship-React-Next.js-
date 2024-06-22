# Bytewise_Fellowship (React & Next.js)
## Week 02 TASKS 

### Day 02 (21/06/24 )
## Task 02 - Learn about props in React components, how they are passed

In this task I learned about: <br>

## Props
- stands for "properties"
- pass from Parent Component to Child Component.
- props are immutable( meaning that once they are set, they cannot be modified by the child component. )

## Working of Props
### passing props in Parent Component

```
// ParentComponent.jsx
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="Alice" age={30} />
    </div>
  );
}
```
### accessing props in Child Component

- Functional Component

  ```
    // ChildComponent.jsx (Functional Component)
    function ChildComponent(props) {
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }
  ```
 - ClassComponent

    ```
    // ChildComponent.jsx (Class Component)
    import React, { Component } from 'react';
    
    class ChildComponent extends Component {
      render() {
        return (
          <div>
            <p>Name: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
          </div>
        );
      }
    }
    ```

### Using Props Dynamically

- Props are not limited to primitive data types they can also be functions or even React elements.
- This flexibility allows components to be highly dynamic and reusable.

Parent Component
```
// ParentComponent.jsx
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <ChildComponent buttonText="Click Me" onClick={handleClick} />
    </div>
  );
}
```
Child Component
```
// ChildComponent.jsx
function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.buttonText}</button>
    </div>
  );
}
```
