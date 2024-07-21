# Bytewise_Fellowship (React & Next.js)
## Week 06 (18/07/24)

### Day 04
## Task 04 - Third party options for global state management

### 1. Redux
Pros:
- Predictable state management through actions and reducers.
- Extensive ecosystem with middleware like Redux Thunk and Redux Saga for handling asynchronous operations.
- DevTools for easy debugging and time-travel debugging.
  
Cons:

- Can involve a lot of boilerplate code.
- Learning curve, especially for beginners.
  
### 2. Context API
Pros:

- Built into React, no need for additional libraries.
- Simplifies state management for small to medium-sized applications.
  
Cons:

- Not as performant for large-scale applications with deep component trees.
- No built-in middleware for handling side effects like Redux has.

### 3. Recoil
Pros:

- Developed by Facebook, same team behind React.
- Simple API with features like atoms (pieces of state) and selectors (computed state).
- Good performance with concurrent mode compatibility.
  
Cons:

- Still relatively new, so the ecosystem and community support are growing.
- Limited tooling compared to more established libraries like Redux.
