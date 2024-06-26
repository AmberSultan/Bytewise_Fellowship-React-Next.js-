# Bytewise_Fellowship (React & Next.js)
## Week 03 (26/06/24)

### Day 01
## Task 01 - More on Hooks, advanced useState usecases for complex state and how to get rid of useState hell

## ✔ Advanced `useState` Use Cases for Complex State Management

This task includes:

- some advanced techniques and best practices for utilizing useState effectively in complex scenarios

### 1. Managing Complex State with Objects or Arrays

Instead of using multiple useState calls for each piece of state, you can manage related state variables using objects or arrays

```
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
});

// Update specific fields
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
```
### 2. Functional Updates

When updating state based on the previous state, use the functional update form of setState. This ensures you're always working with the most current state.

```
const [count, setCount] = useState(0);

const increment = () => {
  setCount((prevCount) => prevCount + 1);
};

const decrement = () => {
  setCount((prevCount) => prevCount - 1);
};
```
### 3. Optimizing Performance

- Consider using `useEffect` or `useLayoutEffect` when updating state based on its previous value asynchronously or when it depends on props.
- This helps in managing side effects and optimizing performance.

### 4. Custom Hooks
- Abstract complex state logic into custom hooks for reusability across multiple components. 
- This approach enhances maintainability and reduces code duplication.

### 5. Reducers with useState
For more complex state transitions involving multiple sub-values, `useReducer` can be a more suitable alternative to manage state in a predictable way.

## ✔ Getting rid of `useState` hell 
