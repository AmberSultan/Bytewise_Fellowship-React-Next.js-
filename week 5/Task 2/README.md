# Bytewise_Fellowship (React & Next.js)
## Week 05 (09/07/24)

### Day 02
## Task 02 - API calls with fetch and axios

### using fetch

```
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

 ### using axios 

 - axios is a HTTP client library 

 ```
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

### Choosing Between fetch and axios:
- If you prefer native solutions and are okay with handling more details yourself, use fetch.
- For simpler syntax and built-in error handling, axios is often preferred, especially in larger applications.
