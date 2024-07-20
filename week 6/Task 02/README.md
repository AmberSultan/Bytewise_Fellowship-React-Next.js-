# Bytewise_Fellowship (React & Next.js)
## Week 05 (16/07/24)

### Day 02
## Task 02 - Introduction to useContext and context API

By using the Context API and useContext hook, you can 
- manageglobal state in a more efficient and organized way
- avoiding the complications of prop drilling and making your code cleaner and more maintainable.

### Context API: 
Provides a way to pass data through the component tree without having to pass props down manually at every level.

- Provider Component: Wraps parts of the application and provides the context value.
- Consumer Component: Used to access the context value.

### useContext Hook: 
Simplifies the process of accessing context values in functional components.


### Example Structure
- src
  - index.js (wraps the app with MyContextProvider)
  - App.js (main app component)
  - MyContext.js (context and provider setup)
  - UserProfile.js (component using context)
