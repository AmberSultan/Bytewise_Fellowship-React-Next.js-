# Bytewise_Fellowship (React & Next.js)
## Week 05 (10/07/24)

### Day 04
## Task 04 - Animations with Framer Motion

### Install Framer Motion:
`npm install framer-motion`

### Basic Animation:
```
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hello, Framer Motion!
    </motion.div>
  );
};

export default App;
```
