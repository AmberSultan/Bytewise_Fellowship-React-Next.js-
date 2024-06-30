# Bytewise_Fellowship (React & Next.js)
## Week 03 (27/06/24)

### Day 02
## Task 02 - Preventing infinite re-rendering loop with useEffect

### Steps to prevent: 
 ## 1. Use Dependencies Correctly:
  use dependencies correlty that it will only run when one of these dependencies changes.
    ```
    useEffect(() => {
    }, [dependency1, dependency2]);
    ```
 ## 2. Use State and Props Wisely:
   Ensure that you aren't causing state or props to change within the useEffect itself, which could trigger another render.
    ```
    useEffect(() => {
    const fetchData = async () => {
    // Fetch data and update state
    };
    fetchData();
    }, []); // Empty dependency array means this effect runs only once after the initial render
    ```
 ## 3. Avoid Unnecessary State Updates:
  Ensure that the state update within the effect does not depend on itself, which can cause an infinite loop.
    ```
    useEffect(() => {
    if (state !== newState) {
    setState(newState);
    }
    }, [state, newState]);
    ```
 ## 4. Memoize Functions
 If you’re using a function inside your effect that’s defined outside, make sure to memoize it using `useCallback`.

 ```
const memoizedFunction = useCallback(() => {
  // Function logic here
}, [dependency1, dependency2]);

useEffect(() => {
  memoizedFunction();
}, [memoizedFunction]);
```
    
 ## 5. Clean Up Effects

 If your effect involves setting up subscriptions or timers, make sure to clean them up properly.
 ```
 useEffect(() => {
  const timer = setTimeout(() => {
    // Your logic here
  }, 1000);

  return () => clearTimeout(timer); // Clean up the timer
}, []);
```
