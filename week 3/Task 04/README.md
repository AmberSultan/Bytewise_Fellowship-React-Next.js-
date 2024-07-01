# Bytewise_Fellowship (React & Next.js)
## Week 03 (29/06/24)

### Day 04
## Task 04 - Conditional rendering in React

## 1.Using Ternary Operator

```
import React, { useState } from 'react';
const ExampleComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (<h1>Welcome back!</h1>) : (<h1>Please sign in.</h1>)}
    </div>
  );
};
export default ExampleComponent;
```

## 2.Using Logical AND Operator (&&)

```
import React, { useState } from 'react';
const ExampleComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <p>Data Loaded!</p>}
    </div>
  ); };
export default ExampleComponent;
```

## 3.Using if Statements

```
import React, { useState } from 'react';

const ExampleComponent = () => {
  const [status, setStatus] = useState('loading');

  let content;
  if (status === 'loading') {
    content = <p>Loading...</p>;}
else if (status === 'error') {
    content = <p>Error occurred!</p>;
  } else {
    content = <p>Data Loaded!</p>;
  }
  return <div>{content}</div>;
};
export default ExampleComponent;
```
