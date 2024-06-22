# Bytewise_Fellowship (React & Next.js)
## Week 02 TASKS 

### Day 03 (22/06/24 )
## Task 03 -  Learn about React Hooks, get an idea of major react hooks

In this task I learned about: <br>

## React Hooks
- Hooks are used in Functional Components.
- Enhanced Functionality Without Classes.
- Make code more manageable and clear.

## Major react hooks

### 1. `useState` :

   - Add state to functional components.
   - Syntax:
     ```
     const [state, setState] = useState(initialState);
     ```
### 2. `useEffect` :

   - Perform side effects in function components.
   - Used with calling API in our code.
   - Used to increase cout numbers or updation DOM (e.g)
   - Replaces lifecycle methods like componentDidMount, componentDidUpdate, componentWillUnmount
   - Syntax:
     ```
       useEffect(() => { /* effect */ }, [dependencies]);
     ```     
### 3. `useRef` :

   - Similar like state but not cause us to re-render data as strate does.
   - we can store prev value in it and it presists between differnt renders.
   - Used from refence elemets in HTML just like querySelector
   - Syntax:
     ```
       const refContainer = useRef(initialValue);       //refContainer can be any object
     ```    
### 4. `useContext` :

   - 	Access the value of a context
   - 	Covert from light to dark theme and vice versa(e.g)
   - Syntax:
     ```
       const value = useContext(MyContext);
     ``` 
### 5. `useCallback` :

   - Return a memoized callback
   - Optimizing performance by memoizing event handlers or callbacks 
   - avoid unnecessary re-creations of functions
   - Syntax:
     ```
       const memoizedCallback = useCallback(            //memoizedCallback: The memoized version of your callback function.
        () => {
          // Your callback function logic
        },
        [dependencies]                                //dependencies: An array of dependencies that, when changed, will cause the callback function to be re-created.
      );
     ```
